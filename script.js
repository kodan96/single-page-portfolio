window.addEventListener('load', () => {
    const profile = document.querySelector('.profile');
    const header = document.querySelector('.header');
    const split = document.querySelector('.split');
    const heroBtn = document.querySelector('.hero_btn');
    const btns = document.querySelectorAll('.btn');
    const skills = document.querySelectorAll('.skills_flex');
    const projects = document.querySelectorAll('.project');
    

    // Create a GSAP timeline
    const timeline = gsap.timeline();

    // Add animations to the timeline
    timeline.fromTo(profile, {
        opacity: 0,
        x: 100,
    }, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'ease.out',
        scrub: 1
    }, 0.5);

    timeline.fromTo(header, {
        opacity: 0,
        x: 100,
    }, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'ease.out',
        scrub: 1
    }, 2);

    const text = new SplitType(split, {type: 'char'});

    timeline.from(text.chars, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'pow.in',
        scrub:.1,
        stagger:.01
    }, 3);
    
    timeline.from(heroBtn, {
        opacity: 0,
        y: 100,
        scale: 0,
        duration: 1,
        ease: 'pow.in',
        scrub:.1,
        stagger:.01
    })

    skills.forEach((skill, i) => {

        gsap.from(skill, {
            opacity: 0,
            y: 100,
            scale: 0.2,
            duration: 1,
            ease: 'pow.in',
            scrollTrigger: {
                trigger: skill,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true
            }
            
        })
    })

    btns.forEach((btn, i) => {
        gsap.from(btn, {
            opacity: 0,
            y: 100,
            duration: .5,
            ease: 'fade.in',
            scrollTrigger: {
                trigger: btn,
                start: 'top 60%',
                end: 'top 50%',
                scrub: true,
                toggleActions: 'play none none reverse'
            }
        })
    })

    projects.forEach((project, i) => {
        gsap.from(project, {
            opacity: 0,
            y: 100,
            duration: .5,
            ease: 'power3.in',
            scrollTrigger: {
                trigger: project,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true,
                toggleActions: 'play none none none'
            }
        })
    })

    const contact = document.querySelector('.form');
    gsap.from(contact, {
        opacity: 0,
        x: 100,
        scale: .1,
        duration: .5,
        ease: 'fade.in',
        scrollTrigger: {
            trigger: contact,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
            toggleActions: 'play none none none'
        }
    })

    const email = document.querySelector('#email');
    const submit = document.querySelector('#submit');


    let validate = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const validateEmail = (e) => {
        const email = $('#email').val();
        const error = $('.error');

        e.preventDefault();
        if(!validate(email)) {

            error.toggle();
            error.html('Invalid email address');
            error.css('color','red');
            $('#email').css({
                'borderBottomColor': 'rgba(255, 0, 0, 0.2)',
                'outline':'red',
            });
        }else {
            error.html('Success!');
            error.css('color', 'green');
            $('#email').css({
                
                'borderBottomColor':'green',
            })
            
        };

    };
    $('#submit').on('click', validateEmail);


    // Start the timeline
    timeline.play();
});



