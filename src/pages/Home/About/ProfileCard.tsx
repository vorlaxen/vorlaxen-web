import React from "react";

const ProfileCard: React.FC = () => {
    const [tilt, setTilt] = React.useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

    return (
        <div
            className="relative z-10 rounded-xl overflow-hidden shadow-xl shadow-blue-500/10 
               transition-transform duration-300 ease-out transform-gpu will-change-transform "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.05)`,
            }}
        >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl
                    transition-transform duration-[1500ms] ease-[cubic-bezier(0.03,0.98,0.52,0.99)] transform-gpu">
                <div className="relative aspect-[4/5.15] overflow-hidden 
    bg-white dark:bg-black bg-gradient-to-br from-blue-200/60 via-purple-200/40 to-pink-200/40 
    dark:from-blue-500/5 dark:via-slate-900/20 dark:to-blue-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                    <div className="absolute inset-0 opacity-10 dark:bg-[length:20px_20px] dark:bg-[image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="relative ">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-blue-400/30 to-blue-500/30 rounded-full blur-md opacity-70"></div>
                            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-700/80 to-indigo-800/80 flex items-center justify-center relative p-1 border border-white/20">
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <div className="absolute inset-0 
                                        bg-gradient-to-br 
                                        from-blue-400 via-indigo-500 to-purple-600
                                        animate-[pulse_3s_ease-in-out_infinite]">
                                    </div>
                                </div>
                                <img
                                    className="rounded-full z-10"
                                    src="https://avatars.githubusercontent.com/u/219521791?v=4"
                                    alt="Profile"
                                    width={130}
                                    height={130}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        <div className="text-lg font-bold text-black dark:text-white mt-4">Hakan Kaygusuz</div>

                        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm rounded-lg px-6 py-2 text-center">
                            <div className="text-lg font-bold text-white">Software Developer</div>
                            <div className="text-sm font-medium text-white/80">
                                Web & Desktop & IOT
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                            <div className="h-1 w-16 bg-green-500/80 rounded-full"></div>
                            <div className="h-1 w-8 bg-yellow-500/60 rounded-full"></div>
                            <div className="h-1 w-12 bg-blue-500/60 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
