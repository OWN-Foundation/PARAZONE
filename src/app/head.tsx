import Script from "next/script";

export default function Head({ title }: { title?: string }) {
    return (
        <>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content="Generated by create next app"/>
            <title>Parazone</title>
            <link rel="icon" type="image/png"/>

            {/* Add the Google Tag Manager script */}
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-93NC1TJNLV"
            />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-93NC1TJNLV');
                    `
                }}
            />
            
            <link rel="icon" href="/favicon.ico"/>
        </>
    )
}
