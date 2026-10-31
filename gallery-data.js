// ─────────────────────────────────────────────────────────────
//  NXTUP gallery — the ONE place to edit photos and videos.
//  Used by gallery.html and the "From the room" section on the homepage.
//
//  videos – paste any YouTube link. The video starts from the
//           beginning; add &t=43s to a link to start at 0:43.
//  photos – src: full-size image (opens when clicked)
//           thumb: small version for the grid (~800px)
//           w/h: thumb size, so the grid doesn't jump while loading
//           alt: short description (accessibility + caption)
//  Order here = order on the page.
// ─────────────────────────────────────────────────────────────
window.NXTUP_GALLERY = {
  videos: [
    { url: 'https://www.youtube.com/watch?v=l_Gd74_5wnY', title: 'NXTUP video 1' },
    { url: 'https://www.youtube.com/watch?v=5ZIuvGX5fC0', title: 'NXTUP video 2' }
  ],
  photos: [
    { src: 'assets/gallery/pitch-from-the-audience.jpg', thumb: 'assets/gallery/thumbs/pitch-from-the-audience.jpg', w: 800, h: 533, alt: "A founder pitching on stage, seen from the audience" },
    { src: 'assets/gallery/host-on-the-mic.jpg', thumb: 'assets/gallery/thumbs/host-on-the-mic.jpg', w: 800, h: 533, alt: "The host speaking to the room" },
    { src: 'assets/gallery/filming-the-pitch.jpg', thumb: 'assets/gallery/thumbs/filming-the-pitch.jpg', w: 533, h: 800, alt: "A guest filming a pitch on her phone" },
    { src: 'assets/gallery/founder-presenting.jpg', thumb: 'assets/gallery/thumbs/founder-presenting.jpg', w: 800, h: 533, alt: "A founder presenting on stage" },
    { src: 'assets/gallery/pitch-everything-is-a-risk.jpg', thumb: 'assets/gallery/thumbs/pitch-everything-is-a-risk.jpg', w: 533, h: 800, alt: "A founder pitching in front of his slides" },
    { src: 'assets/gallery/watching-from-the-bar.jpg', thumb: 'assets/gallery/thumbs/watching-from-the-bar.jpg', w: 800, h: 533, alt: "Guests watching the pitches from the bar" },
    { src: 'assets/gallery/behind-the-camera.jpg', thumb: 'assets/gallery/thumbs/behind-the-camera.jpg', w: 800, h: 533, alt: "Behind the camera: filming the night" },
    { src: 'assets/gallery/product-demo.jpg', thumb: 'assets/gallery/thumbs/product-demo.jpg', w: 533, h: 800, alt: "A product shown to the audience during a pitch" },
    { src: 'assets/gallery/founder-team-slide.jpg', thumb: 'assets/gallery/thumbs/founder-team-slide.jpg', w: 533, h: 800, alt: "A founder presenting her team" },
    { src: 'assets/img/hero-nxtup-stage-talk.jpg', thumb: 'assets/gallery/thumbs/host-closing-the-night.jpg', w: 800, h: 533, alt: "The host closing the first NXTUP event" },
    { src: 'assets/gallery/host-with-guests.jpg', thumb: 'assets/gallery/thumbs/host-with-guests.jpg', w: 800, h: 533, alt: "The host talking with guests" },
    { src: 'assets/gallery/networking-outside.jpg', thumb: 'assets/gallery/thumbs/networking-outside.jpg', w: 800, h: 533, alt: "Networking outside the venue" },
    { src: 'assets/gallery/conversations-outside.jpg', thumb: 'assets/gallery/thumbs/conversations-outside.jpg', w: 800, h: 533, alt: "Conversations outside after the pitches" },
    { src: 'assets/gallery/founder-on-stage.jpg', thumb: 'assets/gallery/thumbs/founder-on-stage.jpg', w: 800, h: 533, alt: "A founder answering questions on stage" },
    { src: 'assets/img/nxtup-stage.jpg', thumb: 'assets/gallery/thumbs/nxtup-stage.jpg', w: 800, h: 533, alt: "Founders on the NXTUP stage" },
    { src: 'assets/img/dr-rebekka-hofmann-on-stage.jpg', thumb: 'assets/gallery/thumbs/dr-rebekka-hofmann-on-stage.jpg', w: 800, h: 450, alt: "Dr. Rebekka Hofmann on stage" },
    { src: 'assets/img/founder-talk-at-nxtup.jpg', thumb: 'assets/gallery/thumbs/founder-talk-at-nxtup.jpg', w: 800, h: 533, alt: "A founder talk at NXTUP" },
    { src: 'assets/img/nxtup-audience.jpg', thumb: 'assets/gallery/thumbs/nxtup-audience.jpg', w: 800, h: 800, alt: "A packed room at an NXTUP event" },
    { src: 'assets/img/guests-networking.jpg', thumb: 'assets/gallery/thumbs/guests-networking.jpg', w: 800, h: 516, alt: "Guests networking outside" }
  ]
};
