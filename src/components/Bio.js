import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Link = ({ href, children }) => (
  <a
    style={{
      marginRight: rhythm(0.3),
    }}
    href={href}
  >
    {' '}
    {children}{' '}
  </a>
)
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p />
            <p style={{ maxWidth: 350 }}>
              Just a curious person, nothing else... <br />
              Follow me on: &nbsp;
              <Link href={`https://twitter.com/${social.twitter}`}>
                Twitter
              </Link>
              <Link href={`https://www.linkedin.com/in/${social.linkedIn}`}>
                LinkedIn
              </Link>
              <Link href={`https://github.com/${social.github}`}>Github</Link>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          linkedIn
          github
        }
      }
    }
  }
`

export default Bio
