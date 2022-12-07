import { useRouter } from 'next/router'

const EventDetail = () => {
    const router = useRouter()
    const { eventId } = router.query

    return <p>Event: {eventId}</p>
}

export default EventDetail
