export interface UseUploadProps {
  // maxNumber?: number;
  accept?: string
  // children?: (props: ExportInterface) => React.ReactNode;
  multiple?: boolean
  // value: ImageListType;
  onChange?: (files: File[]) => void
  // maxFileSize?: number;
  // resolutionWidth?: number;
  // resolutionHeight?: number;
  // resolutionType?: ResolutionType;
  // onError?: (errors: ErrorsType, files?: ImageListType) => void;
  // dataURLKey?: string;
  // inputProps?: React.HTMLProps<HTMLInputElement>;
  // allowNonImageType?: boolean;
}
