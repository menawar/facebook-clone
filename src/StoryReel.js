import React from 'react';
import './StoryReel.css';
import Story from './Story'

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
    return (
         <div className="storyReel">
             <Story
               image={img}
               profileSrc="https://scontent.flos3-1.fna.fbcdn.net/v/t1.0-9/121676457_405839813912754_334329955022514311_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_eui2=AeG-R_vG1Yf2yzzrTDoCL3q4RQi4DrHjNYZFCLgOseM1hl92SDajv4-vlVfQlfQCGK4er_peU-9-vqxwzvzTf2BO&_nc_ohc=-npuCU4cbFQAX_9Y3O8&_nc_ht=scontent.flos3-1.fna&oh=01cb047fad29dd61f10f19945fb7f5ef&oe=5FFC8321"
               title="Agnes Adams"
             />
             <Story
               image={img}
               profileSrc="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/62542092_1661562677322059_2137839668304019456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e3f864&_nc_eui2=AeGghiiwrIpoXh9fwa1sfWU6FNVrHRlqCWQU1WsdGWoJZHUB16NAARjreWpAhMUYCxzO3weD-nQtjNf5x_XX8OAR&_nc_ohc=5AdlZHCtXd0AX-_JMhR&_nc_ht=scontent.flos3-2.fna&oh=d4222665c3fc7a3dd1b8c939a96f29d4&oe=60001829"
               title="Sylvester Wuryen"
             />
             <Story
               image={img}
               profileSrc="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/84391797_2469789703132919_2947342069028356096_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEdIHi5C0XwpxufMXHPOW-Q6f1ErnzHXa_p_USufMddrx0UcqHUaMFXLVG6wF91kQthOsPoK98-JG55NCt19h0s&_nc_ohc=jSPl0a-f3EUAX9e6rt4&_nc_oc=AQn_6PFka01i5iQoqsTeR0RLltqM4hTIMiJ7JK_sIPToWeJfV7aS2kuLr2MeQ8Gr7aQ&_nc_ht=scontent.flos3-2.fna&oh=6e35d1dd8a6b8bcc34024b8ab9818dd5&oe=5FFEC6FE"
               title="Sylvester Menawar"
             />
             <Story
               image={img}
               profileSrc="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/16999187_1209141139183982_8638057613847146724_n.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_eui2=AeGCTLqMyNuDQpkaoWvFSQz175ybL3hCLxnvnJsveEIvGeAYu-UTxwQwdP3_5Vmz-MJJUge2bMO7fS7pAO85Rrwb&_nc_ohc=kdZ3Run4PHcAX--Rz9C&_nc_ht=scontent.flos3-2.fna&oh=62e35419bd4fb8b3426b6be865528bca&oe=60001FD8"
               title="Emmanuel Iliya"
             />
             <Story
               image={img}
               profileSrc="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/48384057_1851794698251180_1602425609210822656_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_eui2=AeFvJMVJy192L2AOfErkn90T19-S3rQLtHPX35LetAu0c9l50z-aIR-97DsmEblErVk5VMI3mI6jeG9dW4QnV7sC&_nc_ohc=X_t47SlD8M4AX9ul_Mg&_nc_ht=scontent.flos3-2.fna&oh=2351733d813268e6bae5f8e9e301f87b&oe=60001028"
               title="Kwakba Ali Mbimshida"
             />
          </div>
    )
}

export default StoryReel
