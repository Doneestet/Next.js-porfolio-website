import Head from 'next/head';
import Link from 'next/link';

const Layout = ({title, description = '', children}) => {
    return (
        <>
            <Head>
                <title> {title} || IT Blog on NextJS</title>
                <link rel='shortcut icon' href='/favicon.png' type="image/png" />
                <meta name='description' content={description || 'Simple blog on NextJS'} />

                <meta property='og:description' content={description || 'Simple blog on NextJS'} />
            </Head>

            <header>
                <Link href='/'>
                    
                    <a>Главная</a>
                </Link>
                <img src='/post.png' alr='/' />

            </header>
            <div className="container">{children}</div>

            <footer>
                2022 &copy; IT Blog NextJS
            </footer>

            

        </>
    );
}

export default Layout;