import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../../../../../components/LoadingAnimation";
import { conicGradientBlack } from "../../../../../components/styles";

export const PDFContent = () => {
    const pageRef = useRef();
    const [pageWidth, setPageWidth] = useState(0);
    const [file, setFile] = useState(null);
    const boxStyle = 'flex place-content-center w-[100vw] sm:w-[90vw] md:w-[75vw] lg:w-[65vw] h-[85vh] rounded-lg';

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

        setFile('/Resume-2023.pdf');
    }, []);

    useEffect(() => {
        if (pageRef?.current) setPageWidth(pageRef.current.clientWidth);
    }, [pageRef]);

    return (
            <div ref={pageRef} className={`${boxStyle} overflow-y-scroll overflow-x-hidden`}>
                <Document
                    file={file}
                    loading={
                        <div className={`${conicGradientBlack} ${boxStyle}`}>
                             <LoadingAnimation />
                        </div>
                    }
                    onError={error => console.error(error)}
                >
                    <Page width={pageWidth} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                    <Page width={pageWidth} pageNumber={2} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </div>
    )
};
