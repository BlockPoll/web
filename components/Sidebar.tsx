import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { NextPage } from 'next';
import { FaGithub, FaGithubSquare, FaHome, FaRegCopy } from 'react-icons/fa';
import { transformSolanaId, copyToClipboard } from '../utils/common';
import { getProgramId } from '../utils/solana';
import style from '../styles/Sidebar.module.scss';
import baseStyle from '../styles/Base.module.scss';
import Link from 'next/link';
import { DefaultProps } from '../pages';

const Sidebar: NextPage<DefaultProps> = (props) => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const { pollCount, accountBalance } = props;
  const programId = transformSolanaId(getProgramId().toBase58(), 8);

  return (
    <div className={style.sidebar}>
      <div className={style['sidebar-content']}>
        <Link href={'/'}>
          <a>
            <h1 className={`${baseStyle['heading']}`}>BlockPoll</h1>
          </a>
        </Link>
        <h3 className={`${baseStyle['heading']} ${style['heading-text']}`}>
          <em>Polls on Solana Blockchain</em>
        </h3>

        <>
          {publicKey ? (
            <>
              <span className={style['sidebar-data']}>
                <h2
                  className={`${baseStyle['heading']} ${style['sub-heading']}`}
                >
                  WALLET
                </h2>
                <hr className={style['sidebar-divider']} />
                <p>
                  {transformSolanaId(publicKey?.toBase58())}
                  <FaRegCopy
                    className={style['sidebar-copy-button']}
                    onClick={async () =>
                      await copyToClipboard(publicKey?.toBase58())
                    }
                  />
                </p>
                <p className={style['sidebar-account-bal']}>
                  Account Balance:{' '}
                  <span className={style['sidebar-account-bal-text']}>
                    {`${accountBalance} SOL`}
                  </span>
                </p>
              </span>
            </>
          ) : (
            <></>
          )}
        </>

        <span className={style['sidebar-data']}>
          <h2 className={`${baseStyle['heading']} ${style['sub-heading']}`}>
            STATS
          </h2>
          <hr className={style['sidebar-divider']} />
          <p className={style['sidebar-polls']}>
            <span className={style['sidebar-poll-count']}>{pollCount}</span>{' '}
            polls created
          </p>
        </span>

        <div className={style['sidebar-info']}>
          <hr className={style['sidebar-divider']} />
          <p>
            Cluster: <b>Devnet</b>
          </p>
          <p>
            Program Id:{' '}
            <Link
              href={`https://explorer.solana.com/address/${getProgramId().toBase58()}?cluster=devnet`}
            >
              <a target={'_blank'}>
                <b>{transformSolanaId(getProgramId().toBase58(), 8)}</b>
              </a>
            </Link>
            <FaRegCopy
              className={style['sidebar-copy-button']}
              onClick={async () =>
                await copyToClipboard(getProgramId().toBase58())
              }
            />
          </p>
          <p>
            <Link href={'https://github.com/BlockPoll'}>
              <a target={'_blank'}>
                <span className={style['sidebar-github']}>
                  <b>Source Code</b>{' '}
                  <FaGithubSquare style={{ fontSize: '24px' }} />
                </span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
