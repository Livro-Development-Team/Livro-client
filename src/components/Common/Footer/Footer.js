import React from "react";
import "./Footer.scss";
import Logo from 'assets/svg/Logo';
import GithubIcon from 'assets/svg/Github';

const Footer = () => {
  const memberList = [
    {
      category: 'Frontend',
      members: ['안채웅'],
    },

    {
      category: 'Backend',
      members: ['변웅섭'],
    },
  ];

  return (
    <div className="Footer">
      <div className="Footer-Wrapper">
        <div className="Footer-Contents">
          <div className="Footer-Contents-Left">
            <Logo className="Footer-Contents-Left-Logo" />
            <div>
              livros는 광주소프트웨어마이스터고내 도서관 서비스 웹입니다.<br />
              도서관에 가지 않고도 대출하고, 도서의 유무를 확인하고, 반납일을 확인하는 등<br />
              어디서든 편하게 도서관 서비스를 이용할 수 있습니다.
            </div>
          </div>

          <div className="Footer-Contents-Right">
            {
              memberList.map((member, index) => {
                const { category, members } = member;
                return (
                  <div key={index}>
                    <div>{category}</div>
                    {
                      members.map((name) => {
                        return <div>{name}</div>
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

      <a href="https://github.com/livro-s" target ="_blank" rel="noopener noreferrer" >
        <GithubIcon className="Footer-Github" />
      </a>
    </div>
  );
};

export default Footer;
