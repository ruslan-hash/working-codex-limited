import type{Metadata}from"next";import"./globals.css";import{Header,Footer}from"./components";
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://uk-vpn-guide.example"),title:"UK VPN Guide",description:"Independent UK VPN, ad blocking and DNS advice.",robots:{index:true,follow:true},icons:{icon:"/favicon.svg"}};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body><Header/>{children}<Footer/></body>
    </html>
  );
}
