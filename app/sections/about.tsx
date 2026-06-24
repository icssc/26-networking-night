"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useState } from "react";
import ScrollFloat from "@/components/ScrollFloat";
import { StarIcon } from "@/components/StarIcon";

const events = [
    {
        icon: "🎮",
        name: "Rotating Games",
        description: "Fast-paced table games designed to spark conversation",
    },
    {
        icon: "⚡",
        name: "Speed Networking",
        description: "Timed rounds with professionals from top tech companies",
    },
    {
        icon: "🌐",
        name: "Free-For-All",
        description: "Open networking to deepen connections at your own pace",
    },
    {
        icon: "🎁",
        name: "Raffle",
        description: "Prizes earned throughout the night for top networkers",
    },
];

const professionals = [
    { name: "Sponsor Logo", href: "#sponsor-1", direction: "left", petr: false },
    { name: "Recruiter Profile", href: "#sponsor-2", direction: "right", petr: false },
    { name: "Petr in Transit", href: "#petr-ufo", direction: "left", petr: true },
    { name: "Company Partner", href: "#sponsor-3", direction: "right", petr: false },
] as const;

const studentBenefits = [
    "Connect directly with recruiters and experienced industry professionals",
    "Practice communication and soft skills through interactive games and guided prompts",
    "Learn about companies, roles, and career paths in tech",
    "Gain insight into what recruiters look for beyond technical ability",
];

const companyBenefits = [
    "Direct access to 60+ motivated ICS students exploring internships and full-time roles",
    "Cross-company networking with fellow industry professionals and recruiters",
    "Face-to-face interaction in small-group and rotating formats",
];

const sponsorBenefits = [
    "Elevated brand visibility on campus through ICSSC promotion and event marketing",
    "Spotlight recognition during opening remarks",
    "Opportunities to host sponsored prizes or engagement incentives",
];

const faqs = [
    {
        question: "Who should attend?",
        answer: "ICS students who want friendly networking practice and industry professionals who want meaningful conversations with UCI talent.",
    },
    {
        question: "What happens during the event?",
        answer: "Guests rotate through table games and speed networking prompts, then move into open-format networking for deeper conversations.",
    },
    {
        question: "Do students need networking experience?",
        answer: "No. The event is designed to be supportive, guided, and low-pressure so students can build confidence as they go.",
    },
    {
        question: "How can companies get involved?",
        answer: "Companies can RSVP as industry guests or sponsor the event for added visibility, remarks, and engagement opportunities.",
    },
];

export default function About(){
    const [openFaq, setOpenFaq] = useState(0);

    return(
        <div className="w-full overflow-hidden">
            <section className="shooting-transition relative flex items-center justify-center px-6" aria-label="Shooting star transition">
                {[0, 1, 2, 3, 4].map((star) => (
                    <motion.span
                        key={star}
                        className="shooting-line"
                        style={{ top: `${18 + star * 13}%` }}
                        animate={{ x: ["120vw", "-30vw"], opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 4.5 + star * 0.35,
                            delay: star * 0.55,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

            </section>

            <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center lg:px-16">
                <div className="relative z-10 mx-auto max-w-5xl">
                    <ScrollFloat
                        containerClassName="mb-0 text-center"
                        textClassName="text-[clamp(2.4rem,10vw,4.5rem)] font-bold leading-tight tracking-tight md:text-[clamp(3rem,6vw,4.5rem)]"
                        variant="galaxyStar"
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                    >
                        What is Networking Night?
                    </ScrollFloat>
                    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-(--galaxy-nebula)" />
                    <Typography className="mx-auto mt-10 max-w-4xl text-base font-semibold leading-8 text-white/85 md:text-lg">
                        <span className="font-black text-(--galaxy-star)">
                            Networking Night
                        </span>{" "}
                        is a high-energy, cross-company event, where students and professionals from across the tech industry will be brought together for an exciting night of rotating table games and speed networking rounds that encourage collaboration, communication, and quick thinking. Our night will conclude with an open-format networking to deepen conversations and make lasting bonds. With refreshments and raffle prizes earned, Networking Night goes beyond traditional career events, serving as an opportunity to build confidence, expand your network, and form real connections.
                    </Typography>
                </div>

                <div className="relative z-10 mt-16 grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {events.map((event) => (
                        <div key={event.name} className="glass-card flex min-h-44 flex-col items-center justify-center p-6 text-center">
                            <span className="text-4xl" aria-hidden>
                                {event.icon}
                            </span>
                            <Typography variant="galaxyStar" className="mt-4 text-xl font-black">
                                {event.name}
                            </Typography>
                            <Typography className="mt-3 max-w-52 text-sm font-semibold leading-6 text-white/70">
                                {event.description}
                            </Typography>
                        </div>
                    ))}
                </div>

                <div className="asteroid-belt about-asteroid-belt" aria-hidden>
                    {Array.from({ length: 14 }).map((_, index) => (
                        <motion.span
                            key={index}
                            className="asteroid"
                            animate={{ y: [0, index % 2 ? 10 : -10, 0], rotate: [0, 8, -6, 0] }}
                            transition={{ duration: 3 + (index % 4), repeat: Infinity, ease: "easeInOut" }}
                        />
                    ))}
                </div>
            </section>

            <section className="relative min-h-screen px-6 py-24 lg:px-16">
                <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
                    <ScrollFloat
                        textClassName="text-[clamp(2.6rem,6vw,4rem)] font-bold leading-tight tracking-tight"
                        variant="galaxyNebula"
                    >
                        UFO Professionals
                    </ScrollFloat>
                    <Typography className="mx-auto mt-4 max-w-2xl text-white/75">
                        Sponsor and professional cards can be updated as attendees are confirmed. Each UFO is a link target for a company site or LinkedIn profile.
                    </Typography>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {professionals.map((professional, index) => (
                        <motion.a
                            key={professional.name}
                            href={professional.href}
                            className="ufo-card"
                            initial={{ opacity: 0, x: professional.direction === "left" ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.12 }}
                        >
                            <span className={`ufo ufo--${(index % 3) + 1}`}>
                                {professional.petr ? <span className="ufo__petr">petr</span> : <span className="ufo__logo">logo</span>}
                            </span>
                            <Typography className="mt-6 font-bold">{professional.name}</Typography>
                        </motion.a>
                    ))}
                </div>
            </section>

            <section className="relative px-6 py-24 lg:px-16">
                <div className="beam-ufo" aria-hidden>
                    <span className="ufo ufo--beam"><span className="ufo__petr">petr</span></span>
                    <span className="tractor-beam" />
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <BenefitPanel title="Student Benefits" body="Networking Night is designed to help students build confidence, expand their professional circles, and practice real-world networking in a supportive environment." items={studentBenefits} />
                    <BenefitPanel title="Company Rep Benefits" body="Networking Night offers companies a meaningful opportunity to connect with UCI's driven and technically skilled student community in an interactive, relationship-focused setting." items={companyBenefits} />
                </div>

                <div className="glass-card relative z-10 mx-auto mt-10 max-w-4xl p-8 text-center">
                    <Typography variant="galaxyStar" className="text-2xl font-bold">
                        Sponsor Benefits
                    </Typography>
                    <Typography className="mt-3 text-white/75">
                        Sponsoring Networking Night gives companies elevated visibility, priority access to top ICS talent, and deeper relationship-building opportunities within UCI&apos;s tech community.
                    </Typography>
                    <ul className="mt-6 grid gap-3 text-left md:grid-cols-3">
                        {sponsorBenefits.map((benefit) => (
                            <li key={benefit} className="benefit-chip">{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="moon-section relative px-6 pb-20 pt-36 lg:px-16">
                <div className="moon-surface-petr" aria-hidden>petr</div>
                <div className="mx-auto max-w-5xl">
                    <ScrollFloat
                        textClassName="text-center text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-tight tracking-tight"
                        variant="galaxyDeep"
                    >
                        FAQ & Contact Us
                    </ScrollFloat>

                    <div className="mt-10 grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
                        <div className="flex flex-col gap-3">
                            {faqs.map((faq, index) => (
                                <button
                                    key={faq.question}
                                    className={`faq-button ${openFaq === index ? "faq-button--active" : ""}`}
                                    onClick={() => setOpenFaq(index)}
                                    type="button"
                                >
                                    {faq.question}
                                </button>
                            ))}
                        </div>
                        <div className="moon-answer">
                            <Typography className="text-sm uppercase tracking-[0.3em] text-[#3d426b]/70">
                                {faqs[openFaq].question}
                            </Typography>
                            <Typography className="mt-4 text-xl font-bold leading-8 text-[#3d426b]">
                                {faqs[openFaq].answer}
                            </Typography>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-4xl bg-[#3d426b]/80 p-6 text-center shadow-2xl md:flex-row md:text-left">
                        <div>
                            <Typography className="font-bold text-white">Questions or sponsorship interest?</Typography>
                            <Typography className="text-white/75">Reach out to ICSSC Corporate for RSVP links, sponsorship details, and attendee updates.</Typography>
                        </div>
                        <Button href="mailto:corporate@icssc.club" variant="contained" color="galaxyStar" endIcon={<StarIcon />}>
                            Contact Corporate
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function BenefitPanel({ title, body, items }: { title: string; body: string; items: string[] }) {
    return (
        <div className="glass-card relative z-10 p-8">
            <Typography variant="galaxyNebula" className="text-2xl font-bold">
                {title}
            </Typography>
            <Typography className="mt-4 text-white/75">{body}</Typography>
            <ul className="mt-6 space-y-3">
                {items.map((item) => (
                    <li key={item} className="benefit-chip">{item}</li>
                ))}
            </ul>
        </div>
    );
}