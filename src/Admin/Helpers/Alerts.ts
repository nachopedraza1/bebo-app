import Swal, { SweetAlertIcon } from 'sweetalert2';

export const DisplayAlert = (icon: SweetAlertIcon, text: string) => {
    Swal.fire({
        position: 'center',
        icon: icon,
        title: text,
        showConfirmButton: false,
        timer: 1500
    })
}