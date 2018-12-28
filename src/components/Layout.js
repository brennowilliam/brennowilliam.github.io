import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const styles = {
  headerText: {
    ...scale(0.9),
    marginBottom: rhythm(1.5),
    marginTop: 0,
    // color: '#2DCC71',
    fontWeight: 600,
  },
  headerLink: {
    boxShadow: 'none',
    textDecoration: 'none',
    color: 'inherit',
  },
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 style={styles.headerText}>
          <Link style={styles.headerLink} to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#33495E`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          borderTop: `5px solid #446CB3`,
          height: `100vh`,
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
          <footer>
            If you have any questions, concerns, or just want to chat, hit me up{' '}
            <a href="mailto:brennowilliam@gmail.com">Here!</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
