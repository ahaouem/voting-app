/**
 * @param {string} id - The id of the voting
 * @returns {JSX.Element} The voting component
 */
export default function Voting({ userId }: { userId: string }): JSX.Element {
    // TODO: by voting id, fetch the voting data
    return (
        <>
            <main>
                <section>
                    <div>
                        <p>pic</p>
                        <p>username</p>
                    </div>
                    <div>timestamp</div>
                </section>
                <section>title</section>
                <section>input / buttons to vote</section>
            </main>
            <button>share button using next-share</button>
        </>
    );
}
