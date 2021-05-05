
import { GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'
import { api } from '../services/api'
import locale from 'date-fns/locale/pt-BR'

  type Episodes = {
    id: string,
    titile: string,
    members: string,
    published_at: string,
    thumbnail: string,
    descrption: string,
    file: {
      url: string,
      type: number,
      duration: number,  
    }

  } 

  type HomeProps = {
    episodes: Episodes[];
  }


export default function Home(props: HomeProps) {
  return (
    <div>
    <h1>Index</h1>
    <p>{format(new date())}</p>
    </div> 
  ) 
} 

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: { 
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {  
      id: episode.id,
      title: episode.title,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MM yy", {locale: ptBR }),
    }
  })
  
  
 
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
