import { useRouter } from 'next/router'
import { Transition, useTransition, a } from 'react-spring'
import Layout from '../src/components/layout'
import '../styles/globals.css'
import About from './about'
import Archive from './archive'
import Home from './index'

function MyApp({ Component, pageProps, router }) {
  const { asPath: location } = useRouter()
  const transition = useTransition(location, {
    delay: 0,
    config: { duration: 250 },
    exitBeforeEnter: true

  })
  const items = [
    {
      id: router.route,
      Component,
      pageProps
    }
  ];
  return (
    <>
      <Layout>
        <Transition
          items={items}
          keys={item => item.id}
          initial={{ opacity: 0 }}
          from={{ opacity: 1 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: .8 }}
          exitBeforeEnter={true}
          config = {{duration:200}}
        >
          {(styles, { pageProps, Component }) => (
            <a.div style={{ ...styles, height: '100%' }}>
              <Component {...pageProps} />
            </a.div>
          )}
        </Transition>

      </Layout>
    </>
  )
}

export default MyApp
