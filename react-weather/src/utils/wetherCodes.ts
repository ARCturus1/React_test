export function getWhetherDescriptionByData(whetherCode: number): string {
    switch (whetherCode) {
        case 0: return 'Clear sky';
        case 1: return 'Mainly clear';
        case 2: return 'partly cloudy';
        case 3: return 'overcast';
        
        case 45: return 'Fog';
        case 48: return 'Depositing rime fog';

        case 51: return 'Drizzle: light intensity';
        case 53: return 'Drizzle: moderate intensity';
        case 55: return 'Drizzle: dense intensity';
        
        case 56: return 'Freezing Drizzle: light intensity';
        case 57: return 'Freezing Drizzle: dense intensity';
        
        case 61: return 'Rain: slight intensity';
        case 63: return 'Rain: moderate intensity';
        case 65: return 'Rain: heavy intensity';
        
        case 66: return 'Freezing Rain: light intensity';
        case 67: return 'Freezing Rain: heavy intensity';
        
        case 71: return 'Snow fall: slight intensity';
        case 73: return 'Snow fall: moderate intensity';
        case 75: return 'Snow fall: heavy intensity';
        
        case 77: return 'Snow grains';
        
        case 80: return 'Rain showers: slight';
        case 81: return 'Rain showers: moderate';
        case 82: return 'Rain showers: violent';
        
        case 85: return 'Snow showers slight';
        case 86: return 'Snow showers heavy';
        
        case 95: return 'Thunderstorm: Slight or moderate';
        case 96: return 'Thunderstorm with slight hail';
        case 97: return 'Thunderstorm with moderate hail';
        case 98: return 'Thunderstorm with moderate hail';
        case 99: return 'Thunderstorm with heavy hail';

        default: return '';
    }
}

/**
 * Returns the weather icon emoji for a given code.
 * @param whetherCode The numeric code representing the weather condition.
 * @returns The corresponding emoji or a default emoji if no match is found.
 */
export function getIconForWeatherCode(whetherCode: number): string {
    const iconMap = {
        0: '☀️',
        1: '⛅',
        2: '🌤️',
        3: '☁️',
        45: '🌫️',
        48: '❄️',
        51: '🌦️',
        53: '🌧️',
        55: '☔',
        56: '🌨️',
        57: '🧊',
        61: '💧',
        63: '🌧️',
        65: '⛈️',
        66: '❄️',
        67: '🌨️',
        71: '❄️',
        73: '❆',
        75: '🌨️',
        77: '❄️',
        80: '🌦️',
        81: '🌧️',
        82: '⛈️',
        85: '🌨️',
        86: '❄️',
        95: '🌩️',
        96: '⛈️',
        97: '⛈️',
        98: '⛈️',
        99: '🌨️',
        default: '❓',
    } as { [key: number | string]: string }; // Type assertion to treat iconMap as a dictionary with number keys

    return iconMap[whetherCode] || iconMap['default'];
}
