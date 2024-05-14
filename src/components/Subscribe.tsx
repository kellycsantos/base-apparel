export default function Subscribe() {
    return (
        <>
            <section className='subscribe' role='subscribe section'>
                <h1><span className="accent">We're</span>coming soon</h1>
             
                <p>Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
               
               
                </p>
                <form action="" onSubmit={e => { e.preventDefault() }}>
                    <div className="input-container">
                        <input placeholder="Email Address" type="email" />
                        <input type="submit" value="env" />
                    </div>
                </form>
            </section>
        </>
    )
}