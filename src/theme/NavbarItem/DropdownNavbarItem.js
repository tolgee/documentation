import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  isRegexpStringMatch,
  useCollapsible,
  Collapsible,
} from '@docusaurus/theme-common';
import {
  isSamePath,
  useLocalPathname,
} from '@docusaurus/theme-common/internal';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import { separateToGroups } from './itemGroups';

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}
function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}
function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}) {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  const itemGroups = separateToGroups(items);

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}
    >
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>

      <div className="dropdown__menu">
        {itemGroups.map((group, i) => {
          return (
            <ul className="dropdown__menu-group" key={i}>
              {group.title && (
                <div className="dropdown__menu-title">{group.title}</div>
              )}
              {group.items.map((item, i) => (
                <NavbarItem
                  isDropdownItem
                  onKeyDown={(e) => {
                    if (i === items.length - 1 && e.key === 'Tab') {
                      e.preventDefault();
                      setShowDropdown(false);
                      const nextNavbarItem =
                        dropdownRef.current.nextElementSibling;
                      if (nextNavbarItem) {
                        const targetItem =
                          nextNavbarItem instanceof HTMLAnchorElement
                            ? nextNavbarItem
                            : // Next item is another dropdown; focus on the inner
                              // anchor element instead so there's outline
                              nextNavbarItem.querySelector('a');
                        targetItem.focus();
                      }
                    }
                  }}
                  activeClassName="dropdown__link--active"
                  {...item}
                  key={i}
                />
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
function DropdownNavbarItemMobile({
  items,
  className,
  position, // Need to destructure position from props so that it doesn't get passed on.
  onClick,
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);
  const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
    initialState: () => !containsActive,
  });
  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);

  const itemGroups = separateToGroups(items);

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}
    >
      <NavbarNavLink
        role="button"
        className={clsx(
          'menu__link menu__link--sublist menu__link--sublist-caret',
          className
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {itemGroups.map((group, i) => (
          <React.Fragment key={i}>
            {group.title && (
              <div className="dropdown__menu-title">{group.title}</div>
            )}
            {group.items.map((item, i) => (
              <NavbarItem
                mobile
                isDropdownItem
                onClick={onClick}
                activeClassName="menu__link--active"
                {...item}
                key={i}
              />
            ))}
          </React.Fragment>
        ))}
      </Collapsible>
    </li>
  );
}
export default function DropdownNavbarItem({ mobile = false, ...props }) {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}
