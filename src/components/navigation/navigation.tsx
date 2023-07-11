import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuProps } from 'antd'

type Route = {
  page: string
  title: string
}

const RouteLink = ({ page, title }: Route) => <Link to={`/${page}`}>{title}</Link>

const items: MenuProps['items'] = [
  {
    label: <RouteLink page='dogs' title='Dogs' />,
    key: 'dogs',
  },
  {
    label: <RouteLink page='cats' title='Cats' />,
    key: 'cats',
  },
]

export const Navigation = () => {
  const [activePage, setActivePage] = useState('dogs')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') navigate('../dogs')
    setActivePage(location.pathname.substring(1))
  }, [location.pathname, navigate])

  return (
    <>
      <Menu mode='horizontal' selectedKeys={[activePage]} items={items} />
      <Outlet />
    </>
  )
}
