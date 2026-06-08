import { createClient } from '@supabase/supabase-client-helpers'

async function update() {
  const supabase = createClient()
  const { data, error: fetchError } = await supabase
    .from('articles')
    .select('content')
    .eq('slug', 'krpacovo-skryte-utocisko-nizkych-tatier')
    .single()

  if (fetchError) {
    console.error(fetchError)
    return
  }

  let content = data.content

  // The user wants to replace the bullet points with inline text in the first paragraph of that section.
  const oldText = `## Srdce oblasti: Vodná nádrž Krpáčovo

Hlavným lákadlom počas letných mesiacov je bezpochyby rovnomenná **vodná nádrž**. Toto umelo vytvorené jazero je zasadené priamo do lesného prostredia, čo mu dodáva nezameniteľný severský ráz.

- **Kúpanie a vodné športy:** V lete je voda príjemne osviežujúca a vhodná na plávanie, člnkovanie či paddleboarding.
- **Rybolov:** Pre milovníkov ticha s udicou v ruke je jazero obľúbeným rybárskym revírom.
- **Relax na brehu:** Okolie nádrže je lemované udržiavanými trávnatými plochami, ktoré sú ideálne na pikniky s rodinou alebo len na leňošenie s dobrou knihou.`

  const newText = `## Srdce oblasti: Vodná nádrž Krpáčovo

Hlavným lákadlom počas letných mesiacov je bezpochyby rovnomenná **vodná nádrž**. Toto umelo vytvorené jazero je zasadené priamo do lesného prostredia, čo mu dodáva nezameniteľný severský ráz. Kúpanie a vodné športy: V lete je voda príjemne osviežujúca a vhodná na plávanie, člnkovanie či paddleboarding. Rybolov: Pre milovníkov ticha s udicou v ruke je jazero obľúbeným rybárskym revírom. Relax na brehu: Okolie nádrže je lemované udržiavanými trávnatými plochami, ktoré sú ideálne na pikniky s rodinou alebo len na leňošenie s dobrou knihou.`

  content = content.replace(oldText, newText)

  const { error: updateError } = await supabase
    .from('articles')
    .update({ content })
    .eq('slug', 'krpacovo-skryte-utocisko-nizkych-tatier')

  if (updateError) {
    console.error(updateError)
  } else {
    console.log('Article updated successfully')
  }
}

update()
