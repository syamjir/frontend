import { redirect } from "react-router-dom";
export async function action({ params }) {
    const id = params.jobId;
    const url = `/api/${id}`

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error('Failed to delete job');
    }

    console.log('Job deleted successfully');

    return redirect('/')
}