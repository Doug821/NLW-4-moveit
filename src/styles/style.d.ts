import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            thinyBackground: string,
            background: string,
            title: string,
            subTitle: string,
            grayLine: string,
            yellow: string,
            yellowDark: string,
            textHighlight: string,
            
            invertWhite: string,
            invertBlack: string,
            overlay: string,
        }
    }
}
