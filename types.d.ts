// country datatype declared here
type Country = {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        }
    },
    cca2: string;
    cioc: string;
}

type Player = {
    playerFirstName: string;
    playerLastName: string;
    playerPhoto: string;
    playerThumbNail: string;
    country: string;
    playerRole: string;
    playerSubRole: string;
}