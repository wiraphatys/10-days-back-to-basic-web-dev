import React from 'react'

const Badge = () => {
    return (
        <div>
            <button type="button" class="btn btn-primary position-relative">
                Inbox
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
            <span class="badge rounded-pill bg-primary ms-4">Primary</span>
            <span class="badge rounded-pill bg-secondary">Secondary</span>
            <span class="badge rounded-pill bg-success">Success</span>
            <span class="badge rounded-pill bg-danger">Danger</span>
            <span class="badge rounded-pill bg-warning text-dark">Warning</span>
            <span class="badge rounded-pill bg-info text-dark">Info</span>
            <span class="badge rounded-pill bg-light text-dark">Light</span>
            <span class="badge rounded-pill bg-dark">Dark</span>
        </div>
    )
}

export default Badge