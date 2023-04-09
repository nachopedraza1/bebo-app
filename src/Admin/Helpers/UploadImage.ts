
export const UploadImage = async (file: File | null) => {
    if (!file) return;
    const API_URL = "https://api.cloudinary.com/v1_1/dlrynazbm/upload";

    const formData = new FormData();
    formData.append('upload_preset', 'bskif3z6');
    formData.append('file', file);

    try {
        const resp = await fetch(API_URL, {
            method: 'POST',
            body: formData,
        });

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
    }
}