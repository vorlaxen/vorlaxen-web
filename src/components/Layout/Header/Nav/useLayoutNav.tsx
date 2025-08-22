import { useTranslation } from 'react-i18next'
import { type NavItem } from './HeaderNavItems'

export const useLayoutNav = (items: NavItem[]): NavItem[] => {
    const { t } = useTranslation('layout')

    const mapItems = (navItems: NavItem[], parentPath = 'header.nav.items'): NavItem[] =>
        navItems.map(item => {
            const currentPath = `${parentPath}.${item.name.toLowerCase().replace(/ /g, '')}`

            return {
                ...item,
                name: item.children
                    ? t(`${currentPath}.label`)
                    : t(currentPath),
                children: item.children ? mapItems(item.children, currentPath) : undefined
            }
        })

    return mapItems(items)
}
