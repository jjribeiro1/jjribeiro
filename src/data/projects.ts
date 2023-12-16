import GamerHubImage from '../../public/images/games-hub.png'
import CasaFerramentas from '../../public/images/casa-das-ferramentas.png'
import { Project } from '@/types'

export const projectsData: Project[] = [
  {
    name: 'Gamer hub',
    image: GamerHubImage,
    description: `Um site para gamers descobrirem novos jogos Free to Play. Os jogos são apresentados de forma paginada e com possibilidade de filtrar por categorias e gêneros. Usuários podem ver informações detalhadas de cada jogo, incluindo avaliações e comentários realizados por outras pessoas. Caso esteja autenticado, além de postar avaliações e comentários, o usuário pode salvar jogos em uma biblioteca pessoal e marcar jogos como "jogado", "não jogado" ou "jogando atualmente". A combinação de Firebase com React Query permite que qualquer interação do usuário com o site seja praticamente instantânea.`,
    tech: [
      'Typescript',
      'React',
      'Next',
      'Firebase',
      'React Query',
      'Radix-UI',
      'TailwindCSS',
    ],
    repository: 'https://github.com/jjribeiro1/games-hub',
    deployUrl: 'https://games-hub-chi.vercel.app/',
  },

  {
    name: 'Casa das ferramentas',
    image: CasaFerramentas,
    description: `E-commerce completo integrado com diferentes serviços. Utilizei o SanityCMS (gerenciador de conteúdo headless) para cuidar da parte de criação/atualização/exclusão de produtos. Clerk para autenticação de usuários. Stripe para receber pagamentos. PlanetScale (banco MySQL serverless) para armazenar informações de usuários e pedidos realizados. OBS: Por ser apenas um projeto pessoal para fins de aprendizado, o checkout do stripe está em modo de desenvolvimento, o que significa que nenhuma cobrança será realizada`,
    tech: [
      'Typescript',
      'React',
      'Next',
      'Radix-UI',
      'TailwindCSS',
      'SanityCMS',
      'PlanetScale',
      'Stripe',
      'Clerk',
    ],
    repository: 'https://github.com/jjribeiro1/tools-ecommerce-client',
    deployUrl: 'https://casadasferramentas.vercel.app/',
  },
]
