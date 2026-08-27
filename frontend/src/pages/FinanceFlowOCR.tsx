import React, { useState, useRef, useCallback, useEffect } from "react";
import { Upload, Image as ImageIcon, Loader2, ArrowLeft, Copy, Check, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const FinanceFlowOCR = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [extractedText, setExtractedText] = useState<string>("");
    const [imagePath, setImagePath] = useState<string | null>(null);
    const [editedText, setEditedText] = useState<string>("");
    const [files, setFiles] = useState<File[]>([]);
    const [outputText, setOutputText] = useState<string>("");
    const [copied, setCopied] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFiles = Array.from(e.dataTransfer.files);
            setFiles(droppedFiles);
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        setFiles(selectedFiles);
    };

    useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file as any));
        };
    }, [files]);

    const handleUpload = async () => {
        if (!files.length) return;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file);
        });

        try {
            setIsProcessing(true);
            const response = await fetch("http://127.0.0.1:8000/extract-text", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("OCR processing failed");
            }

            const data = await response.json();
            setOutputText(data.extracted_text);
            setExtractedText(data.extracted_text);
            setEditedText(data.extracted_text);
            if (data.image_path) setImagePath(data.image_path);

            toast.success("Text extracted successfully!");
        } catch (error) {
            console.error("Error:", error);
            toast.error("OCR processing error or backend not reachable");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCopy = () => {
        if (!outputText) return;
        navigator.clipboard.writeText(outputText);
        setCopied(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#010409] text-white relative flex flex-col items-center py-6 sm:py-10 px-4 sm:px-6 selection:bg-blue-600/40 selection:text-white">
            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-sky-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

            {/* Back button */}
            <div className="w-full max-w-6xl mb-6 z-10">
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-200/80 hover:text-white transition-colors duration-200 group px-4 py-2 rounded-xl bg-blue-950/40 border border-blue-500/30 hover:border-blue-400/60 backdrop-blur-md text-sm shadow-md"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform text-blue-400" />
                    Back to Ecosystem
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col items-center justify-start w-full max-w-6xl z-10"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3"
                    >
                        <span>Document Intelligence Engine</span>
                    </motion.div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 tracking-tight text-white">
                        Summarizer Flow{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-200">
                            OCR
                        </span>
                    </h1>
                    <p className="text-blue-100/70 max-w-xl mx-auto text-sm sm:text-base">
                        Deep vision text extraction & neural OCR pipeline for documents and high-resolution images.
                    </p>
                </div>

                {/* Upload & Output Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full min-h-[500px]">
                    
                    {/* Card 1: Upload / Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#020617]/95 border border-blue-950/80 hover:border-blue-500/40 rounded-2xl p-5 sm:p-7 shadow-[0_8px_32px_rgba(0,10,30,0.6)] backdrop-blur-md flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                                    <FileText size={18} className="text-sky-400" />
                                    Source Document
                                </h2>
                                {files.length > 0 && (
                                    <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                                        {files.length} selected
                                    </span>
                                )}
                            </div>

                            {files.length === 0 ? (
                                <div
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className="min-h-[260px] sm:min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-blue-900/60 hover:border-blue-500/80 rounded-xl p-6 cursor-pointer transition-all duration-300 bg-blue-950/20 hover:bg-blue-950/40 group text-center"
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*,application/pdf"
                                        multiple
                                        onChange={handleFileChange}
                                    />
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                                        <Upload className="text-sky-400" size={30} />
                                    </div>
                                    <p className="font-semibold text-white mb-1 text-sm sm:text-base">
                                        Click or drag document to upload
                                    </p>
                                    <span className="text-xs text-blue-200/60 font-mono">Supports PNG, JPG, JPEG, WEBP, PDF</span>
                                </div>
                            ) : (
                                <div className="min-h-[260px] sm:min-h-[300px] flex flex-col rounded-xl border border-blue-900/60 p-4 bg-[#010409]">
                                    <div className="flex justify-between items-center pb-3 mb-3 border-b border-blue-950/80">
                                        <span className="text-xs text-blue-200 font-mono">Selected Files</span>
                                        <button
                                            onClick={() => {
                                                setFiles([]);
                                                setExtractedText("");
                                                setOutputText("");
                                            }}
                                            className="px-3 py-1 bg-red-950/40 hover:bg-red-900/60 rounded-lg text-red-300 text-xs border border-red-500/30 transition-colors"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 overflow-y-auto max-h-[240px]">
                                        {files.map((file, index) => {
                                            const isImage = file.type.startsWith("image");
                                            return (
                                                <div key={index} className="w-24 h-24 sm:w-28 sm:h-28 bg-[#020617] rounded-xl overflow-hidden flex items-center justify-center border border-blue-900/60 relative">
                                                    {isImage ? (
                                                        <img
                                                            src={URL.createObjectURL(file)}
                                                            alt="preview"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="text-blue-300 text-xs text-center p-2 font-mono break-all">
                                                            📄 {file.name}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handleUpload}
                            disabled={files.length === 0 || isProcessing}
                            className={`mt-6 w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base 
                ${(files.length === 0 || isProcessing)
                                    ? "bg-blue-950/40 text-blue-400/40 border border-blue-900/30 cursor-not-allowed"
                                    : "bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)]"}`}
                        >
                            <AnimatePresence mode="wait">
                                {isProcessing ? (
                                    <motion.div
                                        key="processing"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Loader2 className="animate-spin text-white" size={18} />
                                        <span>Extracting Text via Neural Pipeline...</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="extract"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <ImageIcon size={18} />
                                        <span>Execute Text Extraction</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </motion.div>

                    {/* Card 2: Output Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#020617]/95 border border-blue-950/80 hover:border-blue-500/40 rounded-2xl p-5 sm:p-7 shadow-[0_8px_32px_rgba(0,10,30,0.6)] backdrop-blur-md flex flex-col justify-between"
                    >
                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                                    <FileText size={18} className="text-sky-400" />
                                    Extracted Intelligence
                                </h2>
                                {outputText && (
                                    <button
                                        onClick={handleCopy}
                                        className="text-xs font-mono text-sky-400 hover:text-white transition-colors bg-blue-950/80 border border-blue-500/30 px-3 py-1 rounded-lg flex items-center gap-1.5"
                                    >
                                        {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                                        <span>{copied ? "Copied" : "Copy All"}</span>
                                    </button>
                                )}
                            </div>

                            <div className="flex-1 min-h-[260px] sm:min-h-[300px] w-full bg-[#010409] border border-blue-950/80 rounded-xl p-4 flex flex-col">
                                <textarea
                                    value={outputText}
                                    onChange={(e) => {
                                        setOutputText(e.target.value);
                                        setEditedText(e.target.value);
                                    }}
                                    className="w-full h-full flex-1 bg-transparent outline-none resize-none text-blue-100/90 placeholder:text-blue-300/30 font-mono text-xs sm:text-sm leading-relaxed"
                                    placeholder={isProcessing ? "AI is processing document layers..." : "Extracted document text will stream here..."}
                                />
                            </div>
                        </div>

                        {editedText && (
                            <button
                                onClick={async () => {
                                    if (!imagePath) {
                                        toast.error("No active image session to store");
                                        return;
                                    }

                                    const formData = new FormData();
                                    formData.append("image_path", imagePath);
                                    formData.append("description", editedText);

                                    try {
                                        const response = await fetch("http://127.0.0.1:8000/save-description", {
                                            method: "POST",
                                            body: formData
                                        });
                                        const data = await response.json();
                                        toast.success(data.message || "Record stored successfully");
                                    } catch (error) {
                                        toast.error("Database connection failed");
                                    }
                                }}
                                className="mt-6 w-full py-3.5 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
                            >
                                Commit to Database
                            </button>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default FinanceFlowOCR;
