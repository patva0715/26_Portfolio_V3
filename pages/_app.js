import { useRouter } from 'next/router'
import { useTransition, a } from 'react-spring'
import Layout from '../src/components/layout'
import '../styles/globals.css'
import About from './about'
import Archive from './archive'
import Home from './index'

function MyApp({ Component, pageProps }) {
  const { asPath: location } = useRouter()
  const transition = useTransition(location, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: .99 },
    delay: 0,
    config: { duration: 250 },
    exitBeforeEnter: true
  })
  return (
    <>
      <Layout>
        {transition((style, loc) => (
          <a.div style={style}>
            {loc === '/' ?
              <a.div style={style}>
                <Home />
              </a.div>
              :
              loc === '/about' ?
                <a.div style={style}>
                  <About />
                </a.div>
                :
                <a.div style={style}>
                  <Archive />
                </a.div>
            }
            {/* <Component  {...pageProps} /> */}
          </a.div>
        ))}
      </Layout>
    </>
  )
}

export default MyApp
