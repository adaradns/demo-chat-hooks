import React from 'react'
import Swal from 'sweetalert2'

let timerInterval

const successAlert = (friend) => {
    Swal.fire({
        title: `El usuario ${friend.name} `,
        icon: 'info',
        html: 'se ha desconectado',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    });
}

const MySwal = (props) => {
    return (
        <>
            {props.online && !props.checked ? successAlert(props.friend) : null}
        </>
        
    )
}

export default MySwal;