
import { trigger, animate, style, group, animateChild, query, stagger, transition, keyframes } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'absolute', width: 'inherit' })
            , { optional: true }),
        /* 2 */ group([  // block executes in parallel
            query(':enter', [
                style({ opacity: 0, }),
                animate('0.6s ease-in', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('0.2s ease-out', style({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
])

export const routerloginTransition = trigger('routerloginTransition', [
    transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'absolute', width: '100%' })
            , { optional: true }),
        /* 2 */ group([  // block executes in parallel
            query(':enter', [
                style({ transform: 'translateY(-50%) scale(0)', opacity: 0 }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%) scale(1)', opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateY(0%) scale(1)', opacity: 1 }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(50%) scale(0)', opacity: 0 }))
            ], { optional: true }),
        ])
    ])
])

export const fadeInTransition = trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
        style({ height: 0, opacity: 0 }),
        animate('.6s ease-in', keyframes([
            style({ opacity: 0, height: 0, transform: 'translateY(-5%)', offset: 0 }),
            style({ opacity: .3, height: '30%', transform: 'translateY(1%)', offset: 0.3 }),
            style({ opacity: 1, height: 'auto', transform: 'translateY(0)', offset: 1.0 }),
        ]))]),
    transition(':leave', [   // :leave is alias to '* => void'
        animate('.3s ease-out', style({ opacity: 0, height: 0 }))
        // animate('.6s ease-out', keyframes([
        //   style({ opacity: 1,height:'auto', offset: 0 }),
        //   style({ opacity: .3,height:'30%', offset: 0.3 }),
        //   style({ opacity: 0,height:0, offset: 1.0 }),
        // ]))
    ])
])

export const groupsTransition = trigger('groupsTransition', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))
        ]), { optional: true })
    ])
])
