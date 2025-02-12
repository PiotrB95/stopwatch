export interface FormatTimeProps {
    counter: number
}

export const FormatTime = (counter: number) =>{
    const milliseconds = (counter % 10).toString().padStart(1, '0')
    const seconds = Math.floor((counter / 10) % 60)
        .toString()
        .padStart(2, '0')
    const minutes = Math.floor((counter / 600) % 60)
        .toString()
        .padStart(2, '0')
    const hours = Math.floor(counter / 36000)
        .toString()
        .padStart(2, '0')

    const result = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;

    return result;  
}
