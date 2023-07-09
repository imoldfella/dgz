import { component$ } from "@builder.io/qwik"
import { LanguageSelect } from "../i18n"
import { useLanguage } from "../provider"
import { DarkButton } from "../theme"
import { Ab } from "../theme/basics"

export const SimplePage = component$((props: { title: string }) => {
    const ln = useLanguage()
    // @ts-ignore
    return <><div dir={ln().dir} class='px-2 space-x-1 my-2 fixed w-screen flex flex-row items-center'>

      <div class='flex-1 '/>
      <div class='w-48 '><LanguageSelect /></div>
      <DarkButton />
      <Ab href='#'>{ln().help}</Ab>
      </div>
      <Center>
        {props.children}
      </Center></>
}