import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export const SelectDate: React.FC<{ onDateChange: (date: Dayjs | any) => void }> = ({ onDateChange }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                disableFuture
                defaultValue={dayjs}
                onChange={(date) => onDateChange(date)}
                label="Fecha"
                sx={{ width: "100%" }} />
        </LocalizationProvider>
    )
}
