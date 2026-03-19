import { Head } from '@inertiajs/react';
import LearnContext from '@/components/LearnContext';
// import './App.css'





export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <LearnContext></LearnContext>
        </>
    );
}
