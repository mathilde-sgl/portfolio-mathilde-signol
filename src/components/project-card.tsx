import Badges from "./badge";
import React from "react";
import Link from "next/link";
import Icon from "./icon";

// Styles
const projectCardProps =
    "flex flex-col sm:flex-row items-start sm:items-center gap-[var(--spacing-ml)] sm:gap-[var(--spacing-xl)] group";

const projectImageProps =
    "w-full xs:w-[400px] h-auto xs:h-[400px] transition-transform duration-800 ease-in-out group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]";

interface ProjectCardProps {
    id: string;
    title: string;
    image: string;
    typeText: string;
    badges: { text: string; size?: "large"; leadingIcon?: string }[];
    stateProp?: "enabled" | "hovered";
    href?: string;
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    image,
    typeText,
    badges,
    href,
    onClick,
}) => {
    return (
        <Link
            href={href || "#"}
            passHref
            id={id}
            className={projectCardProps}
            onClick={onClick}
        >
            {/* Image */}
            <img src={image} alt={title} className={projectImageProps}/>

            {/* Contenu texte et badges */}
            <div className="w-full flex-1 flex flex-col gap-[var(--spacing-ml)]">
                <span className="text2">{typeText}</span>
                <h3 className="h3 !pt-0">{title}</h3>
                <div className="flex flex-wrap gap-[var(--spacing-sm)]">
                    <Badges badges={badges} />
                </div>
            </div>

            {/* Icône alignée à droite */}
            <div className="opacity-0 sm:group-hover:opacity-100 transition-opacity duration-600 ease-in-out">
                <Icon name="arrow-next" size="var(--dimension-l)" />
            </div>
        </Link>
    );
};

export default ProjectCard;