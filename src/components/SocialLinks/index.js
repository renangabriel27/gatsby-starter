import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link) => {
        const label = link.label
        const Icon = Icons[label]

        return (
          <S.SocialLinksItem key={label}>
            <S.SocialLinksLink
              href={link.url}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks