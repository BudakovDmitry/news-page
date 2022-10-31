import { useSelector } from 'react-redux'
import { usePage } from 'src/hooks/usePage'
import { switchLang } from 'src/redux/actions'
import { Language } from 'src/types'
import { ChangeEvent } from 'react'

type LanguageState = {
  language: keyof typeof Language
}

export const useHeader = () => {
  const { dispatch } = usePage()
  const language = useSelector((state: LanguageState): keyof typeof Language => state.language)
  

  const handleSwitchLang = (lang: keyof typeof Language): void => {
    dispatch(
      switchLang(lang)
    )
  }

  const onChangeLang = (event: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(
      switchLang(event.target.value)
    )
  }

  return {
    handleSwitchLang,
    language,
    onChangeLang
  }
}