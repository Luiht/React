interface Props {
  title: string;
  description?: string;
}

<<<<<<< HEAD
export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
=======
export const CustomHeader = ({title, description}: Props) => {
  return (
    <div className="content-center">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
  )
}
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
