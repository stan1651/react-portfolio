import React from "react";
import {backend, frontend, general} from "../../utils/skills.js";
import SkillsCard from "../../components/SkillsCard"

function SkillsSection() {
    return (
        <SkillsCard>
            skills ={backend}
            title = "Backend"

        </SkillsCard>
    )
}

export default SkillsSection;