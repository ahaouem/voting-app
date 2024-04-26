export default function LoginLayer({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return <main className="flex items-center justify-center bg-black h-screen w-screen">{children}</main>;
}
