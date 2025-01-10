export interface IHeaderComponentProps {
	themeProp: string;
}

export interface IHeaderComponentEmits {
	(e: 'themeSwitcher', value: string): void;
}

export interface IMainComponentProps extends IHeaderComponentProps {}
export interface IAsideComponentProps extends IHeaderComponentProps {}
export interface IFooterComponentProps extends IHeaderComponentProps {}
export interface ILoaderComponentProps extends IHeaderComponentProps {}
