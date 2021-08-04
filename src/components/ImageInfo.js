import styled from 'styled-components';

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 1rem);
  margin: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);

  .info {
    z-index: 1;
    position: relative;
  }
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

export default function ImageInfo({ authorName, authorImage, downloads }) {
  return (
    <Caption
      className="text-light animate__animated animate__fadeIn animate__delay-2s
      py-2 py-md-3"
    >
      <div className="d-flex align-items-baseline justify-content-center info">
        <div>
          <Avatar
            src={authorImage || 'https://avatars.dicebear.com/api/identicon/.svg?m=9&w=32&h=32'}
          />
        </div>

        <small className="ml-2 info font-weight-bold">{authorName}</small>
      </div>

      <p className="small mb-0">Downloads: {downloads}</p>
    </Caption>
  );
}
