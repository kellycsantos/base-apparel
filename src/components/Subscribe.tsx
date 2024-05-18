import errorIcon from '../assets/images/icon-error.svg'
import { regex } from '../helpers/helpers'
import { useState } from 'react'
export default function Subscribe() {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    function getError() {
        regex.test(email) ? setError(false) : setError(true)
    }

    return (
        <>
            <section className='subscribe' role='subscribe section'>
                <h1><span className="accent">We're</span>coming soon</h1>
                <p>Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <form action="" onSubmit={e => { e.preventDefault() }}>
                    <div className={`input-container ${error && 'error'}`}>
                        <input placeholder="Email Address" className="user-email" type="email"
                            onChange={e => setEmail(e.target.value)} onInput={getError}
                        />
                        <img src={errorIcon} className={error ? 'show-error-icon' : 'hide-error-icon'} />

                        <input type="submit" value="env" onClick={getError} />
                    </div>
                    <span className={error ? 'error-msg' : 'error-msg-hide'}>Please provide a valid email</span>
                </form>
            </section>
        </>
    )
}