import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const bioLinkStyle = { "margin-right": "5px"}

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            website
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            Written by <strong>{author.name}</strong> {author?.summary || null}
          </p>

          <a style={bioLinkStyle} href={social?.linkedin}>
            LinkedIn
          </a>

          <a  style={bioLinkStyle} href={social?.website}>
            Portfolio
          </a>

          <a href={`mailto:` + social?.email}>
            E-Mail
          </a>
        </div>
      )}
    </div>
  )
}

export default Bio
