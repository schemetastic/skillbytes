import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';


export async function GET(event) {
    const prompt = `Write 16 concepts of the ${event.url.searchParams.get('field')} field, each concept should be about 25-28 words long, except for the last one that should be near 50 words long, also, each concept should follow exactly the next format:
{{$ [[concept-name]];[[concept-info]]/}}
Also, make sure that the whole result doesn't have more than 4000 characters.`;

    const token = env.GITHUB_TOKEN;

    const data = `{{$ [[User-Centered Design]];[[A design philosophy that prioritizes the needs, preferences, and limitations of users. Involving users throughout the design process ensures a satisfying and functional experience.]]/}}

{{$ [[Wireframing]];[[A low-fidelity visual representation showcasing a product's layout, structure, and navigation flow. Wireframes act as blueprints during early design stages, helping clarify ideas.]]/}}

{{$ [[Usability Testing]];[[A method that evaluates a product by observing real users as they interact with it. This process identifies usability issues and informs design improvements for better experiences.]]/}}

{{$ [[Interaction Design]];[[The design of interactive elements and user behaviors within a product. It focuses on creating user-friendly experiences by optimizing user engagements with the interface.]]/}}

{{$ [[Visual Hierarchy]];[[The organizational arrangement of design elements to convey their importance. Effective visual hierarchy guides user attention and improves navigation, making content more accessible.]]/}}

{{$ [[Accessibility]];[[The practice of designing products to accommodate users of all abilities. Incorporating accessibility features ensures inclusivity and equal access to digital experiences for those with disabilities.]]/}}

{{$ [[Persona Creation]];[[Developing fictional characters based on user research to represent different user archetypes. Personas help designers empathize with users and create tailored solutions for specific needs.]]/}}

{{$ [[Design Systems]];[[Collections of reusable components, guidelines, and best practices promoting consistency across products. Design systems improve collaboration and efficiency, enhancing user experience through cohesive design.]]/}}

{{$ [[Responsive Design]];[[An approach ensuring web content automatically adjusts to different screen sizes and devices. This method enhances usability, maintaining a positive user experience across platforms.]]/}}

{{$ [[Cognitive Load]];[[The mental effort required to process information in an interface. Reducing cognitive load in design improves usability, allowing users to focus more effectively on essential tasks.]]/}}

{{$ [[User Journeys]];[[Narrative or visual depictions that map a user's experience with a product, illustrating key touchpoints and emotional responses. They provide insights for enhancing the overall user experience.]]/}}

{{$ [[Affordances]];[[Design features that intuitively suggest their functionality to users. Clear affordances help guide interaction, enabling users to understand how to navigate and use an interface effectively.]]/}}

{{$ [[Feedback Mechanisms]];[[Elements that inform users about outcomes from their actions. Effective feedback enhances usability by providing clarity, reducing confusion, and reassuring users during their interactions with a product.]]/}}

{{$ [[A/B Testing]];[[A technique for comparing two versions of a webpage or product feature to determine which one performs better. A/B testing offers data-driven insights for improving user experience and engagement.]]/}}

{{$ [[Color Theory]];[[The study of how colors affect emotions and perceptions in design. Proper color choices can enhance user engagement, improve information clarity, and provide visual harmony within user interfaces, making it a crucial design element.]]/}}

{{$ [[User Experience (UX) Writing]];[[The art of crafting clear and concise content for interfaces, guiding users at critical moments. Good UX writing enhances comprehension, aids in navigation, and ensures user needs are met, significantly boosting engagement and overall satisfaction with the product.]]/}}`

    return json({ data: data });
}