import { isMobile } from 'src/helpers'
import * as Styled from 'src/components/Header/styles'
import { useHeader } from 'src/components/Header/useHeader'
import { Language } from 'src/types'

const MenuIcon = require('src/images/menu-button-icon.png')
const SearchIcon = require('src/images/search-icon.png')
const TelegramIcon = require('src/images/telegram-logo.png')
const FacebookIcon = require('src/images/facebook-logo.png')
const InstagramIcon = require('src/images/instagram-logo.png')
const YoutubeIcon = require('src/images/youtube-logo.png')
const LineIcon = require('src/images/line-icon.png')
const SearchIconForMobile = require('src/images/serach-icon-2.png')

const Header = () => {
  const { handleSwitchLang, language, onChangeLang } = useHeader()

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderButtonMenu>
        <Styled.HeaderButtonMenuIcon src={MenuIcon} alt="icon" />
        Меню
      </Styled.HeaderButtonMenu>
      <Styled.HeaderNavCityList>
        <Styled.HeaderNavCity>
          <Styled.HeaderNavCityLink>Київ</Styled.HeaderNavCityLink>
        </Styled.HeaderNavCity>
        <Styled.HeaderNavCity>
          <Styled.HeaderNavCityLink>Одеса</Styled.HeaderNavCityLink>
        </Styled.HeaderNavCity>
        <Styled.HeaderNavCity>
          <Styled.HeaderNavCityLink>Харків</Styled.HeaderNavCityLink>
        </Styled.HeaderNavCity>
      </Styled.HeaderNavCityList>
      <Styled.HeaderSearchInputContainer>
        <Styled.HeaderSearchInputIcon src={SearchIcon} alt="search-icon" />
        <Styled.HeaderSearchInput type="text" placeholder="пошук новин" />
      </Styled.HeaderSearchInputContainer>
      <Styled.HeaderSocialLinkList>
        <Styled.HeaderSocialLink href="#">
          <Styled.HeaderSocialLinkIcon src={TelegramIcon} alt="telegram-logo" />
        </Styled.HeaderSocialLink>
        <Styled.HeaderSocialLink href="#">
          <Styled.HeaderSocialLinkIcon src={FacebookIcon} alt="facebook-logo" />
        </Styled.HeaderSocialLink>
        <Styled.HeaderSocialLink href="#">
          <Styled.HeaderSocialLinkIcon
            src={InstagramIcon}
            alt="instagram-logo"
          />
        </Styled.HeaderSocialLink>
        <Styled.HeaderSocialLink href="#">
          <Styled.HeaderSocialLinkIcon src={YoutubeIcon} alt="youtube-logo" />
        </Styled.HeaderSocialLink>
      </Styled.HeaderSocialLinkList>
      <Styled.HeaderLineIcon src={LineIcon} alt="line-icon" />
      {isMobile() && (
        <>
          <Styled.SearchButton>
            <Styled.SearchButtonImage src={SearchIconForMobile} alt="search" />
          </Styled.SearchButton>
          <Styled.SelectLang
            name="lang"
            id="lang"
            value={language}
            onChange={onChangeLang}
          >
            <Styled.SelectLangItem value={Language.UA}>
              Ua
            </Styled.SelectLangItem>
            <Styled.SelectLangItem value={Language.RU}>
              Ru
            </Styled.SelectLangItem>
          </Styled.SelectLang>
        </>
      )}
      <Styled.HeaderLangList>
        <Styled.HeaderLangListItem
          onClick={() => handleSwitchLang(Language.RU)}
        >
          Ru
        </Styled.HeaderLangListItem>
        <Styled.HeaderLangListItem
          onClick={() => handleSwitchLang(Language.UA)}
        >
          Ua
        </Styled.HeaderLangListItem>
      </Styled.HeaderLangList>
    </Styled.HeaderContainer>
  )
}

export default Header
