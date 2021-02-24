export interface IHeaderProps {
  title: string;
  showCancel?: boolean;
}

export interface IInitialMarker {
  longitude: number;
  latitude: number;
  longitudeDelta: number;
  latitudeDelta: number;
}

export interface ILocation {
  id: number;
  name: string;
  country: string;
  state: string;
  city: string;
  profile: string;
  latitude: number;
  longitude: number;
  address: {
    street: string;
    complement: string;
    number: string;
    zipcode: string;
  };
  describle: string;
  contactURL: string;
}

export interface ILocationParams {
  id: number;
}
