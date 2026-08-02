import profilePic from "../assets/profilePic.jpeg"

const members = [
/*  Nomzamo Zondo,Sibongile Ndashe, Phumi Mtetwa, Koketso Moeti,Nomfundo Mogapi,Seadimo Tlale, Naabelah Mia, Kwezilomso Mbandazayo*/
    {
        id:1,
        name:"Nomzamo Zondo",
        role:"Human Rights Attorney & Executive Director, Socio-Economic Rights Institute (SERI)",
        image:profilePic,
        bio:` Nomzamo Zondo is a distinguished South African human rights lawyer and public interest advocate dedicated to advancing   
        constitutional rights and social justice. She serves as the Executive Director of the Socio-Economic Rights Institute of South Africa (SERI), where she 
        leads strategic litigation and advocacy aimed at protecting the rights of marginalized and vulnerable communities across the country.Throughout her career, 
        Zondo has played a pivotal role in several landmark constitutional cases that have shaped South Africa's human rights landscape. She was instrumental in the 
        successful legal challenge against the City of Johannesburg's Operation Clean Sweep, which restored the rights of thousands of informal traders to earn a living. 
        She also led litigation that resulted in the Constitutional Court declaring unconstitutional the restrictive rules governing emergency shelters, affirming the rights 
        to dignity, privacy, and family life for people facing homelessness.
        In addition, Zondo has represented communities threatened with forced evictions, advocated for the upgrading of informal settlements, and acted on behalf of the families 
        of the miners who lost their lives in the Marikana massacre, continuing to call for accountability and justice. Her work has consistently focused on securing housing rights, 
        defending livelihoods, and ensuring equal access to justice for disadvantaged South Africans.
        Recognized as one of South Africa's leading public interest lawyers, Nomzamo Zondo continues to influence constitutional jurisprudence through strategic litigation, policy advocacy
        ,and public engagement. Her commitment to equality, dignity, and socio-economic justice has made her a respected voice in the ongoing pursuit of a more just and inclusive South Africa.,`,
        videos: [
            {
                title: "The Constitution Promises Housing… So Why Are South Africans Still Fighting Evictions?",
                url: "https://www.youtube.com/embed/NSQ1KRTPmhk?si=uG_dEEOiGcItCMPN"
            },
            {
                title: "Nomzamo Zondo on South Africa's Xenophobia Crisis & Operation Dudula",
                url: "https://www.youtube.com/embed/WskZp5hvSsA?si=_XFrBktPDbQsZF74" 
            },
            {
                title: "Decades of struggle over land rights",
                url: "https://www.youtube.com/embed/9cbziDm2cjQ?si=NVQ1ELeZOTbcBJUU" 
            },
            {
                title: "Court dismisses applicationto evict illegal occupants",
                url: "https://www.youtube.com/embed/_uoYVv7Hloo?si=UJH35Dkyf864v6Ke"
            },
            {
                title: "Court grants Cape Town permission to evict over 30 homeless people",
                url: "https://www.youtube.com/embed/mPWfC4Pz8Yc?si=X5a9iIqHA1EbpMxp"
            },
            {
                title: "City of Cape Town 20202 eviction ruled unlawful",
                url: "https://www.youtube.com/embed/nBzOwHurRag?si=__AmxRqWIwky_Ye-" 
            },
            {
                title: "Mtolo on Abahlali baseMjondolo's killing claims",
                url: "https://www.youtube.com/embed/a7o-5HYSC0U?si=XubnFfeytQQ3NYD-" 
            },
            {
                title: "Nomzamo Zondo in the Strategic Global Meeting Climate Justice and Corporate Accountability",
                url: "https://www.youtube.com/embed/Ku5ZGE0GQJM?si=B0L0ByJjaUA-cnup"
            },
            {
                title: "SERI denies blocking evictions of tenants from hijacked buildings",
                url: "https://www.youtube.com/embed/kSbGyR_N_uo?si=2SA0G812TKr3BH6H" 
            },
            {
                title: "Economic Opportunity of Domestic Work | Video 3",
                url: "https://www.youtube.com/embed/9b_Jfsmu08E?si=bFL0cTVlAJoStIHx" 
            },
            {
                title: "Marikana Massacre | Discussion | More than R300m paid out in claims",
                url: "https://www.youtube.com/embed/w035VufTS8Y?si=1-2cFVVVNJXPQe4Y"
            },
            {
                title: "Johannesburg CBD Fire Inquiry | Nomzamo Zondo weighs in on the aftermath of the inferno",
                url: "https://www.youtube.com/embed/2RfwCLjZ6zI?si=ChQfPbxlMyLRh2jm" 
            },
            {
                title: "Discussion | Marikana Massacre | 11 years since 34 miners were gunned down",
                url: "https://www.youtube.com/embed/YBOG0_k9Vcc?si=fOsUmoCwEwdv6KuJ"
            },
            //3 years +
            {
                title: "Operation Dudula dragged to court",
                url: "https://www.youtube.com/embed/5yId6ozinDQ?si=OlylHoyXUpXqT0UL"
            },
            {
                title: "Nomzamo Zondo | Executive Director's Message",
                url: "https://www.youtube.com/embed/hjNnTa2Ia7g?si=eFI7nbH83YckiGbu"
            },
            {
                title: "Nomzamo Zondo commemorates and reflects on the Marikana Massacre",
                url: "https://www.youtube.com/embed/liI7LTzvvyE?si=hO9hRj8uxtMDmdh3"
            },
            {
                title: "SERI accuses City of Johannesburg councilor Nkululeko Mbundu of inciting violence against its staff",
                url: "https://www.youtube.com/embed/kPV8nCVjVIE?si=17RXDqVKsB6rRptk" 
            },
            {
                title: "SERI expresses concern about lack of prosecutions in the Marikana massacre: Nomzamo Zondo",
                url: "https://www.youtube.com/embed/wn4I35bxjLc?si=nG0vQNza5KD1hRu8" 
            },
            
            {
                title: "Episode 1: Understanding the Abandoned/Hijacked Buildings in Johannesburg Inner City - with SERI.",
                url: "https://www.youtube.com/embed/UXZVjVOvzK4?si=q-Zor_8Mwhdb7qwp" 
            },
            {
                title: "Nomzamo Zondo weighs in on Dr. Aaron Motsoaledi's words against the Helen Suzman Foundation",
                url: "https://www.youtube.com/embed/A4-4Tfwrwkk?si=4JHt3X3gX_6IjUTm"
            },
            {
                title: "Ubomi Bethu, Nemizamo Yethu: With Nomzamo Zondo",
                url: "https://www.youtube.com/embed/t0Q77kAReK8?si=h5Q2TbDp-jnUZLcS"
            },


            //5 years +
            {
                title: "Wits Protest | Nomzamo Zondo, executive director at Socio Economic Rights on the Wits protest",
                url: "https://www.youtube.com/embed/2pYQqkSijCU?si=4FOfQk9K8TGda0nz"
            },
            {
                title: "The Socio Economic Rights Institute has condemned SAPS for unlawful use of force",
                url: "https://www.youtube.com/embed/KSrefxX2lhY?si=H_mQ1FiCigyJrmiV" 
            },

            {
                title: "Nomzamo Zondo, SERI's Executive Director joins Thabo Mdluli in studio",
                url: "https://www.youtube.com/embed/-FnflcfM4Tg?si=oTbUBfSt65q2jBVM" 
            },
            {
                title: "Nomzamo Zondo on the ISS Marikana report",
                url: "https://www.youtube.com/embed/qN5cwiB8SYc?si=AFCJPMrKeIOscgKk" 
            },
            {
                title: "Nomzamo Zondo discusses Pan-African reflections on leadership and good governanceduring COVID-19",
                url: "https://www.youtube.com/embed/wBu7AX6OoAA?si=q5I0pAEYrQ1no_HK"
            },
            {
                title: "Representative of 36 families who were affected by Marikana massacre speaks to us",
                url: "https://www.youtube.com/embed/7ijf2XmXGxY?si=Zi_6FURSEIxHznY5" 
            },
            {
                title: "Nomzamo Zondo - Lessons from Litigating 'Operation Clean Sweep",
                url: "https://www.youtube.com/embed/SbtQbZ91Fac?si=1wfbbzm4Imx2bsU5"
            },




        ],
        //update contact info
        email:"lesedi@gmail.com",
        phone:"085 555 5555"
    },



    {

        id:2,
        name:"Sibongile Ndashe",
        role:"Human Rights Lawyer & Executive Director, Initiative for Strategic Litigation in Africa (ISLA)",
        image:profilePic,
        bio: `

        Sibongile Ndashe is a distinguished South African human rights lawyer, feminist advocate, and strategic litigator committed to advancing women's rights, 
        gender equality, and social justice across Africa. She is the Founder and Executive Director of the Initiative for Strategic Litigation in Africa (ISLA), 
        a Pan-African organization established in 2014 to strengthen strategic human rights litigation and improve access to justice throughout the continent.
        With more than two decades of experience in public interest law, Ndashe has held key legal positions at the Legal Resources Centre, the Constitutional 
        Court of South Africa, the Women's Legal Centre, and Interights, where she led regional litigation on human rights, equality, and discrimination before 
        African human rights institutions. Her work has focused on developing legal protections for women and people whose rights are violated on the basis of 
        gender identity, gender expression, and sexual orientation.
        Among her most notable contributions is the founding of ISLA, through which she has helped build a continent-wide network of lawyers using strategic 
        litigation to advance women's human rights and establish transformative legal precedents. She also helped establish the African LGBTI Rights Lawyers 
        Network (ALRILaN), providing legal support to advocates working on landmark cases involving equality and non-discrimination before domestic and regional 
        courts. In 2017, Ndashe gained international recognition after being detained in Tanzania while participating in a legal workshop focused on access to HIV 
        services and human rights, highlighting the challenges faced by human rights defenders across Africa.
        Recognized as one of Africa's leading public interest lawyers, Sibongile Ndashe continues to shape human rights jurisprudence through strategic litigation,
        legal capacity building, and policy advocacy. Her work has strengthened protections for women, marginalized communities, and vulnerable groups while
        advancing equality, dignity, and justice across the African continent.`,

        videos: [
            {
                title: "ConCourt to hear arguments on consent in sexual offences",
                url: "https://www.youtube.com/embed/U7ygjGhVyis?si=y8OtENGOSNoLyCJL"
            },
            {
                title: "Who Protects Women When the Law Fails? | Difference She Makes",
                url: "https://www.youtube.com/embed/DrjkXvbQU98?si=qtLLZzaL8fuh9iVo" 
            },
            {
                title: "Emojis in the spotlight at Mbenenge tribunal",
                url: "https://www.youtube.com/embed/c5nV69EokfY?si=zpy6K-cPOUBbBSFN"
            },
            {
                title: "Fighting for Justice Beyond the Courtroom | Sibongile Ndashe | ISLA",
                url: "https://www.youtube.com/embed/gEIZXEU_jv4?si=Sz3oDSw5KOelGcI9"
            },

            //6 months +
            {
                title: "Civil society warns: too few GBV shelters as SA marks 16 days of activism",
                url: "https://www.youtube.com/embed/Gb7-cq-g-Go?si=oDH1ANXgVgxPya3I" 
            },
            {
                title: "Sign antenuptial contract before lobola - Ndashe",
                url: "https://www.youtube.com/embed/EsLvx3pwAKs?si=1IR7QWblB_kOw2_D" 
            },
            {
                title: "State Accountability on Gender-Based Violence in Africa | #AfricanDiaries",
                url: "https://www.youtube.com/embed/b_aYVjP6mLk?si=Q6jSgKiWK5qerOuF" 
            },
            //1year+
            {
                title: "Alarming rise in missing children cases in South Africa",
                url: "https://www.youtube.com/embed/no6PfcatUjM?si=YvOINtku1Wok6c0A" 
            },
            {
                title: "National Council on GBV and Femicide bill is toothless",
                url: "https://www.youtube.com/embed/ouCS6gOqw0k?si=JbhWfFPNJ7XBlBn9"
            },
            {
                title: "Judicial conduct tribunal hearing resumes tomorrow",
                url: "https://www.youtube.com/embed/C4Og02LYl2c?si=XOCOes53zZWLX90L" 
            },
            {
                title: "South African society accepts GBV - Ndashe",
                url: "https://www.youtube.com/embed/tqrbIcSxd_U?si=79830xCDF9V07NU6" 
            },
            {
                title: "Steering Committee member Sibongile Ndashe",
                url: "https://www.youtube.com/embed/Q951WRNxjRM?si=yGaA7rYrI3YeiZbu"
            },
            {
                title: "Eastern Cape battles teenage pregnancy",
                url: "https://www.youtube.com/embed/CCf1shJry4o?si=dZ2gR6mQ4nIJ-AqC"
            },
            {
                title: "Gender-based violence a real challenge in SA",
                url: "https://www.youtube.com/embed/zwFv0aeIr9I?si=iiYXbpcnPkhDXq2V" 
            },
            {
                title: "State accountable for failure to convict Omotoso",
                url: "https://www.youtube.com/embed/FzBKp9RsYEE?si=WZI6kHmVFeQsd2uy"    
            },
            {
                title: "Debate around interpretation of power in workplaces",
                url: "https://www.youtube.com/embed/JnUBSCCuO6Q?si=Dw5HCsERRd6U6waS" 
            },
            {
                title: "Crime in Mpumalanga | Five bodies discovered in a week: Sibongile Ndashe",
                url: "https://www.youtube.com/embed/FJq2Ww2uYqc?si=5zwXP2mLksPxkhjo" 
            },
            {
                title: "Council on GBV and Femicide calls for prioritising of gender-based violence",
                url: "https://www.youtube.com/embed/94_KWW8Svyw?si=nRZdY3hXG2K87u1o"
            },
            {
                title: "Outrage after Olorato Mongale's murder",
                url: "https://www.youtube.com/embed/PLU3sqrGRoo?si=kRXv8r8-OosndL3A"
            },
            //3  years +
            {
                title: "16 Days of Activism for No Violence against Women and Children",
                url:"https://www.youtube.com/embed/xf6Bz8QKqMk?si=6ComBqboyRWSFmqI"
            },
            {
                title: "Finding Courage and Healing Trauma as We Stand for Human Rights with Sibongile Ndashe of ISLA",
                url: "https://www.youtube.com/embed/hQTVJOC-jWI?si=0Zo6vB-ErkwgbWjY"
            },
            
            {
                title: "Equal rights means not being attacked ft Sibongile Ndashe, Initiative for Strategic Litigation",
                url: "https://www.youtube.com/embed/BMF75CaeEX4?si=zRI4NjJb7kxnD8MT" 
            },
            {
                title: "South Africa's Youth Voice: Prof Mamokgethi Phakeng, Shaeera Kalla & Koketso Moeti (Panel)",
                url: "https://www.youtube.com/embed/5iGO0xtteBA?si=9EQHNxqyrYDabVVU"
            },
            {
                title: "(Audio Described) Change for LGBTQ+ people in South Africa, ft Sibongile Ndashe, human rights lawyer",
                url: "https://www.youtube.com/embed/PQj1PaQDqDg?si=eP-R_Hnw_q_aX2LX" 
            },
            
            {
                title: "Change for LGBT people in South Africa ft Sibongile Ndashe, founder and human rights lawyer",
                url: "https://www.youtube.com/embed/YepYJqoovGA?si=Km3dCwJQB6zhpJrg"
            },
            {
                title: "What is the National Strategic Plan on Gender-Based Violence and Femicide?",
                url: "https://www.youtube.com/embed/l6xfAk4oGl8?si=uF5utIWq8BIsV0Mr"
            }
            


        ],
        email:"nomvula@gmail.com",
        phone:"082 222 3333"
    },
    {
        //not finding interviews 
        id:3,
        name:"Phumi Mtetwa",
        role:"Human Rights Activist",
        image:profilePic,
        bio:`Phumi Mtetwa – Biography

        Phumi Mtetwa is a distinguished South African feminist, human rights activist, and social justice leader whose career spans more than four decades. A veteran of the anti-apartheid movement, she has dedicated her life to advancing gender equality, LGBTQI+ rights, economic justice, and grassroots activism across South Africa and the African continent. She serves as the Regional Co-Director of JASS (Just Associates) Southern Africa, where she works to strengthen feminist movements and support community-led advocacy for social change.

        Mtetwa began her activism in the 1980s as part of the anti-apartheid struggle, organizing community campaigns and rent boycotts that challenged systemic injustice. She later became a pioneering advocate for LGBTQI+ rights, co-founding the National Coalition for Gay and Lesbian Equality (NCGLE), which played a central role in securing constitutional protection against discrimination based on sexual orientation in South Africa's democratic Constitution. Her leadership has also extended internationally through her service as Co-Secretary General of the International Lesbian and Gay Association (ILGA), where she championed the rights of LGBTQI+ communities across the Global South.

        Among her most notable contributions are her work with the Lesbian and Gay Equality Project, the AIDS Law Project, the Treatment Action Campaign, and the Masithandane End-Hate Collective, where she has advanced equality, public health, and human rights. Through JASS Southern Africa, she continues to empower women leaders, strengthen grassroots organizations, and build feminist movements committed to dismantling inequality and promoting social justice throughout the region.

        Recognized as one of South Africa's pioneering feminist and human rights advocates, Phumi Mtetwa has made a lasting contribution to the advancement of constitutional democracy, equality, and inclusive social transformation. Her unwavering commitment to justice continues to inspire activists and communities working toward a more equitable and compassionate society.
`,
        email:"thandi.maseko@gmail.com",
        phone:"083 111 4444"
    },

    {
     id:4,
        name:"Koketso Moeti",
        role:"Civic Activist and Social Justice Advocate",
        image:profilePic,
        bio:`Koketso Moeti – Biography

        Koketso Moeti is a distinguished South African civic activist, democracy advocate, and social justice leader committed to empowering citizens to influence public policy and hold institutions accountable. She is the Founding Executive Director of amandla.mobi, a people-powered movement that uses digital technology and grassroots organizing to advance social justice and strengthen participatory democracy across South Africa.

        Since founding amandla.mobi in 2014, Moeti has led nationwide campaigns addressing issues such as gender-based violence, affordable data access, healthcare, social grants, food security, housing rights, and government accountability. Through innovative mobile and digital campaigning, she has helped mobilize hundreds of thousands of South Africans—particularly low-income Black women—to advocate for policies that promote equality, dignity, and economic justice.

        Among her most notable achievements is the establishment of amandla.mobi as one of South Africa's leading civic engagement platforms, enabling citizens to organize collective action through accessible digital tools. Under her leadership, the organization successfully campaigned for the government to fully subsidize digital television migration for low-income households, ensuring vulnerable communities retained access to essential information and public broadcasting. Her work has also influenced national conversations on transparency, corporate accountability, and democratic participation.

        Moeti's leadership has earned international recognition, including selection as an Obama Foundation Fellow, an Atlantic Fellow for Racial Equity, a Keseb Democracy Fellow, and a Charles F. Kettering Global Fellow. She has also served as an expert advisor to the World Economic Forum on civil society engagement and as a board member of WITNESS, contributing to global efforts to strengthen democracy and human rights.

        Recognized as one of South Africa's leading voices in civic activism, Koketso Moeti continues to champion inclusive democracy, social justice, and citizen-led change. Her work has transformed the way ordinary people engage with public institutions, demonstrating the power of collective action to create a more just and equitable society.
`,      
videos: [
            {
                title: "Serious hunger and food security crisis in SA | Is government doing enough?", 
                url: "https://www.youtube.com/embed/H_c1in8R0gw?si=1dlrxsIfX5MDAF0H"           
            },
            {
                title: "Mobile operators instructed to reduce data prices: Koketso Moeti",
                url: "https://www.youtube.com/embed/8ToAQ7EFOmQ?si=z0KbEDosvGOebcJ2"
            },
            {
                title: "Civil group Amandla.Mobi fights alleged collusion between business and government: Koketso Moeti",
                url: "https://www.youtube.com/embed/WCPaVQXYipo?si=vYMNI3uXqUycaeor"
            },

            {
                title: "Meet the South African Activist who started a nationwide movement with just a cell phone",
                url:"https://www.youtube.com/embed/0IvayOCHfW0?si=8y1sq6ShTQuriqZZ"
            },
            {
                title: "amandla.mobi Founder Koketso Moeti interviewed on Maggs on Media",
                url: "https://www.youtube.com/embed/MHee7G8Vufo?si=KfG4F6C8rh3Y9EQr" 
            },
            {
                title: "MAINTAINING A SAFE HUMAN CONNECTION | Afternoon Express | 13 August 2020",
                url: "https://www.youtube.com/embed/aFjpLDV7QW8?si=4Xe4dKyX215n9F3B"
            },

            {
                title: "Koketso Moeti: Women in Social Justice Ep. 07",
                url: "https://www.youtube.com/embed/csDkiM-qtqs?si=JLr5GsehZ7XNKKTQ"
            },
            {
                title: "Rethinking Africa 2020 | Independence begins with self-image and the image of others | Koketso Moeti",
                url: "https://www.youtube.com/embed/xLdsQnIYCCk?si=HuNSEQcj8iu1voP7" 
            },
            {
                title: "#HowTo Build Campaigns that Change Lives with Koketso Moeti",
                url: "https://www.youtube.com/embed/yY0oyJs1zSg?si=EgxWJJEq_1YPwJU3"
            },
            {
                title: "Building a just and people-powered movement – Koketso Moeti",
                url: "https://www.youtube.com/embed/IoRTeeY5OTo?si=KKHCHm_MR5_gzbW5"
            },
            {
                title: "Koketso Moeti of Amandla.Mobi joins Black Women Disrupt Summer Series Live",
                url: "https://www.youtube.com/embed/ewBJt1KU7Ys?si=WOwK19uDce5Y2xCL"
            },
            //9 years
            {
                title: "South Africa: What Role for the Civil Society?",
                url: "https://www.youtube.com/embed/VkdjR0RvFmA?si=Wmob_6AbENP3yYf5"
            },
            {
                title: "Tonight with Tim Modise | Koketso Moeti, Founder & Director of Amandla.mob",
                url:  "https://www.youtube.com/embed/WB0D6KG6IJQ?si=pZMdDA_QJdyKPHE1" 
            },
            //10years +
            {
                title: "Interview with Koketso Moeti",
                url: "https://www.youtube.com/embed/1Xo81eH6Us4?si=L7hs3tik4CjWUWPy"
            },
            


        ],
        email:"sipho.khumalo@gmail.com",
        phone:"084 555 6666"   
    },
    {
     id:5,
        name:"Nomfundo Mogapi",
        role:"Clinical Psychologist and Mental Wellness Advocate",
        image:profilePic,
        bio:`

        Nomfundo Mogapi is a South African clinical psychologist, mental wellness leader, and human rights advocate dedicated to promoting healing, resilience, and psychosocial well-being. She is the Founder and Chief Executive Officer of the Centre for Mental Wellness and Leadership (CMWL), where she works to integrate mental wellness into leadership, governance, peacebuilding, and community development across Africa.

        With more than two decades of experience, Mogapi has been at the forefront of advancing trauma-informed approaches to leadership and social justice. Prior to founding CMWL, she served as the Executive Director of the Centre for the Study of Violence and Reconciliation (CSVR), leading initiatives focused on trauma recovery, gender-based violence prevention, transitional justice, and peacebuilding. Her work has supported individuals, communities, and institutions affected by conflict, violence, and historical injustice throughout the continent.

        Among her most notable contributions is the establishment of the Centre for Mental Wellness and Leadership, which equips leaders and organizations with the tools to address trauma and promote psychological well-being in decision-making and public service. She has also played a significant role in shaping regional human rights policy, contributing to the African Union Transitional Justice Policy and the African Commission on Human and Peoples' Rights General Comment on Redress for Victims of Torture. Through her research, advocacy, and advisory work, she has championed trauma-informed responses to gender-based violence, collective violence, and community healing.

        A respected leader in the fields of mental health, leadership, and human rights, Nomfundo Mogapi continues to advance policies and practices that place human dignity, psychological well-being, and restorative justice at the center of sustainable development. Her work has strengthened the intersection between mental wellness, leadership, and human rights, inspiring more compassionate and resilient communities across Africa.
`,      
videos: [
    
    {
        title: "Migration tensions and mental health: Nomfundo Mogapi weighs in",
        url: "https://www.youtube.com/embed/zJ0d__5l5UM?si=sOVoYYabXZxwTMdP"
    },
    {
        title: "Holiday season brings heightened feelings of isolation and anxiety",
        url: "https://www.youtube.com/embed/czDhoF49KAE?si=MOGfZmwRHDRCHQ3t" 
    },
    {
        title: "SA's healing journey",
        url: "https://www.youtube.com/embed/mJ_Kwd6YcYU?si=kvMNtFS-RVt-xVq6" 
    },

    {
        title: "Dealing with SA's collective societal trauma",
        url: "https://www.youtube.com/embed/CjXvEKjHHic?si=BYi5tFCjDKl_Ox9w" 
    },
    {
        title: "The psychology of mass mobilisation",
        url: "https://www.youtube.com/embed/8Mtu4vXSQXA?si=ytPsU4qzWvAQHMPi" 
    },
    {
        title: "The Anatomy of Violence in South Africa featuring Ms Nomfundo Mogapi and Ms Isobel Frye - 2019",
        url: "https://www.youtube.com/embed/CfqIAnu1kOk?si=8EkbEYqqpm_fgy_1" 
    },

    {
        title: "Nomfundo Mogapi CSVR Director at the #NeverAgainZW Conference" ,
        url: "https://www.youtube.com/embed/cZnvjIFuaF0?si=NUPWJwJIiqGVmMT2" 
    },
    {
        title: "INTERVIEW WITH NOMFUNDO MOGAPI - An Expert in Trauma Healing Approaches- GBV healing",
        url: "https://www.youtube.com/embed/GT5b8aGGzoU?si=K_toclOs4-H--GU1"
    },
    {
        title: "Webinar with Ms Nomfundo Mogapi: Healthcare in Wounded Contexts: Strategies for Practitioners",
        url: "https://www.youtube.com/embed/enq8Rz0GjEM?si=tIxjmcKigy7nVJqA" 
    },
    
    {
        title: "Crime Stats | We are a country in crisis - Nomfundo Mogapi",
        url: "https://www.youtube.com/embed/9AcZP8bp8LI?si=CKAC4jjM-ZXvWRQZ" 
    },
    {
        title: "Easy access to guns, abuse of alcohol and drugs: Nomfundo Mogapi",
        url: "https://www.youtube.com/embed/BSW-QOjUFLo?si=BQKz5mIUcvS_F00d"
    },
    {
        title: "Violence in SA | Understanding why communities loot",
        url: "https://www.youtube.com/embed/46sKtM5W-Ag?si=_UYsOehiNPptSZ4E"
    },
    {
        title: "Debate Part 4 - Is South Africa a violent country?",
        url: "https://www.youtube.com/embed/WL6aKMuXrvA?si=wbVwdjD4dDb-xbSO"
    },
    {
        title: "CSVR calls on President Ramaphosa to lead from the front in the fight against gender-based violence",
        url: "https://www.youtube.com/embed/lRJPXGAGKKE?si=TwCD-7RUHAVC9OY8"
    },
    {
        title: "Methodologies used by MHPSS and peacebuilding practitioners - South Africa",
        url: "https://www.youtube.com/embed/xArhOSkslnU?si=3SPbPHh5z1d64Tj4" 
    },



],
        email:"ayanda.zulu@gmail.com",
        phone:"081 777 8888"   
    },
    {
        //cant find interview
    id:6,
        name:"Seadimo Tlale",
        role:"Human Rights Lawyer and Constitutional Law Expert",
        image:profilePic,
        bio:`

        Seadimo Tlale is a South African human rights lawyer and constitutional law expert dedicated to advancing equality, social justice, and the protection of constitutional rights. She serves as the Executive Director of SECTION27, where she leads strategic litigation, legal research, and advocacy to promote access to quality education, healthcare, and justice for marginalized communities.

        Tlale holds an LL.B. (cum laude) from the University of the Witwatersrand and an LL.M. from the University of California, Los Angeles (UCLA), specializing in Critical Race Studies and Public Interest Law. She has served as a law clerk to Justice Johan Froneman at the Constitutional Court of South Africa and has held research and advisory positions with the United Nations, the South African Human Rights Commission, the African American Policy Forum, UCLA's Promise Institute for Human Rights, Sonke Gender Justice, and the Centre for Applied Legal Studies at Wits University. Her legal practice is grounded in an intersectional approach to public interest and constitutional law.

        Among her most notable contributions is her leadership in advancing strategic litigation that strengthens constitutional rights and promotes accountability in South Africa. She has appeared in matters before the Constitutional Court, the High Courts, and the Labour Courts, contributing to the development of constitutional jurisprudence and expanding access to justice. An Allan Gray Orbis Foundation Fellow, she was also awarded UCLA's U Serve LA Award in 2021 for her outstanding contribution to social justice and was recognized by Professor Kimberlé Crenshaw for her exceptional work advancing racial justice.

        Recognized for her expertise in constitutional and public interest law, Seadimo Tlale continues to champion equality, dignity, and justice through strategic litigation, policy advocacy, and legal leadership. Her work reflects a deep commitment to ensuring that the Constitution remains a powerful instrument for transformative social change and the protection of human rights in South Africa.`,
        
        email:"ayanda.zulu@gmail.com",
        phone:"081 777 8888"
    },
    { //cant find interview
    id:7,
        name:"Naabelah Mia",
        role:"Human Rights Lawyer and Gender Justice Advocate",
        image:profilePic,
        bio:`

        Naabelah Mia is a South African human rights lawyer and gender justice advocate dedicated to advancing equality, dignity, and access to justice. She currently serves as the Executive Director of the Women's Legal Centre, where she leads strategic litigation, advocacy, and legal reform initiatives to promote and protect the rights of women and marginalized communities across South Africa.

        Mia holds a Bachelor of Social Science in Law and Psychology, an Honours degree in Psychology from the University of Cape Town, and a Master of Laws (LL.M.) from the University of California, Los Angeles (UCLA), specializing in Public Interest Law and Policy, as well as International and Comparative Law. Her career has spanned both the private and public interest sectors, including positions at Webber Wentzel, Sonke Gender Justice, the South African Institute for Advanced Constitutional, Public, Human Rights and International Law, the Centre for Environmental Rights, and Lawyers for Human Rights, where she headed the Penal Reform and Detention Monitoring Programme. She also served as a law clerk to Justice Nonkosi Mhlantla at the Constitutional Court of South Africa.

        Among her most notable contributions is her work advancing the rights of women, people deprived of their liberty, and other vulnerable communities. She has led advocacy and litigation on issues including torture prevention, prison and immigration detention reform, gender equality, and access to justice, while promoting alternatives to detention within the criminal justice and immigration systems. Through her leadership, she continues to strengthen legal protections for those most affected by discrimination, inequality, and systemic injustice.

        Recognized for her expertise in public interest and constitutional law, Naabelah Mia continues to champion human rights through strategic litigation, policy advocacy, and legal leadership. Her work reflects a deep commitment to ensuring that the law serves as a tool for dignity, equality, and meaningful social transformation for all South Africans.`,
        
        
        email:"naledi.molefe@gmail.com",
        phone:"082 999 0000"
    },
    {
    id:8,
        name:"Kwezilomso Mbandazayo",
        role:"Constitutional Lawyer and Education Rights Advocate",
        image:profilePic,
        bio:`

        Kwezilomso Mbandazayo is a South African constitutional lawyer, public interest advocate, and legal scholar dedicated to advancing equality, socio-economic rights, and access to quality education. She serves as the Executive Director of the Equal Education Law Centre (EELC), where she leads strategic litigation, legal research, and advocacy to promote and protect the constitutional right to basic education and other fundamental rights in South Africa.

        Mbandazayo has built a distinguished career in constitutional and public interest law, combining legal practice with academic scholarship. Before becoming Executive Director of the EELC, she served as a law clerk at the Constitutional Court of South Africa and held teaching and research positions focused on constitutional law, equality, and transformative justice. Her work has consistently explored the role of the Constitution in addressing systemic inequality and advancing social justice.

        Among her most notable contributions is her leadership in strategic litigation and advocacy aimed at improving access to quality education for all learners, particularly those in under-resourced communities. Through the Equal Education Law Centre, she has championed legal reforms addressing school infrastructure, learner safety, education funding, and accountability, while contributing to broader constitutional discourse on equality and socio-economic rights. Her work continues to strengthen the realization of education rights through evidence-based advocacy and public interest litigation.

        Recognized for her expertise in constitutional law and education rights, Kwezilomso Mbandazayo continues to champion justice, equality, and transformative constitutionalism through legal leadership, policy advocacy, and strategic litigation. Her commitment to protecting fundamental rights has made her an influential voice in advancing equitable access to education and social justice in South Africa.`,
        email:"naledi.molefe@gmail.com",
        phone:"082 999 0000",

        videos: [
            {
                title: "16 Days of Activism for No Violence against Women and Children",
                url: "https://www.youtube.com/embed/_A8Ql1MhoMw?si=CW1lWI6eOwc6hi8H"
            }
        ],
    }

    

]

export default members